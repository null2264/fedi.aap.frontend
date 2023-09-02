import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { HotKeys } from 'react-hotkeys';
import { useIntl, FormattedMessage, defineMessages } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';

import { mentionCompose, replyCompose } from 'soapbox/actions/compose';
import { toggleFavourite, toggleReblog } from 'soapbox/actions/interactions';
import { openModal } from 'soapbox/actions/modals';
import { toggleStatusHidden, unfilterStatus } from 'soapbox/actions/statuses';
import TranslateButton from 'soapbox/components/translate-button';
import AccountContainer from 'soapbox/containers/account-container';
import QuotedStatus from 'soapbox/features/status/containers/quoted-status-container';
import { useAppDispatch, useSettings } from 'soapbox/hooks';
import { defaultMediaVisibility, textForScreenReader, getActualStatus } from 'soapbox/utils/status';

import EventPreview from './event-preview';
import StatusActionBar from './status-action-bar';
import StatusContent from './status-content';
import StatusMedia from './status-media';
import StatusReplyMentions from './status-reply-mentions';
import StatusInfo from './statuses/status-info';
import Tombstone from './tombstone';
import { Button, Card, Icon, Stack, Text } from './ui';

import type {
  Account as AccountEntity,
  Status as StatusEntity,
} from 'soapbox/types/entities';

// Defined in components/scrollable-list
export type ScrollPosition = { height: number, top: number };

const messages = defineMessages({
  reblogged_by: { id: 'status.reblogged_by', defaultMessage: '{name} reposted' },
  show: { id: 'moderation_overlay.show', defaultMessage: 'Show Content' },
  hide: { id: 'moderation_overlay.hide', defaultMessage: 'Hide content' },
});

export interface IStatus {
  id?: string
  avatarSize?: number
  status: StatusEntity
  onClick?: () => void
  muted?: boolean
  hidden?: boolean
  unread?: boolean
  onMoveUp?: (statusId: string, featured?: boolean) => void
  onMoveDown?: (statusId: string, featured?: boolean) => void
  focusable?: boolean
  featured?: boolean
  hideActionBar?: boolean
  hoverable?: boolean
  variant?: 'default' | 'rounded' | 'slim'
  showGroup?: boolean
  accountAction?: React.ReactElement
}

const Status: React.FC<IStatus> = (props) => {
  const {
    status,
    accountAction,
    avatarSize = 42,
    focusable = true,
    hoverable = true,
    onClick,
    onMoveUp,
    onMoveDown,
    muted,
    hidden,
    featured,
    unread,
    hideActionBar,
    variant = 'rounded',
    showGroup = true,
  } = props;

  const intl = useIntl();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const settings = useSettings();
  const displayMedia = settings.get('displayMedia') as string;
  const didShowCard = useRef(false);
  const node = useRef<HTMLDivElement>(null);

  const [showMedia, setShowMedia] = useState<boolean>(defaultMediaVisibility(status, displayMedia));

  const actualStatus = getActualStatus(status);
  const isReblog = status.reblog && typeof status.reblog === 'object';
  const statusUrl = `/@${actualStatus.account.acct}/posts/${actualStatus.id}`;
  const group = actualStatus.group;

  const [isExpanded, setExpanded] = useState<boolean>(!actualStatus.sensitive);  // for CW

  const filtered = (status.filtered.size || actualStatus.filtered.size) > 0;

  // Track height changes we know about to compensate scrolling.
  useEffect(() => {
    didShowCard.current = Boolean(!muted && !hidden && status?.card);
  }, []);

  useEffect(() => {
    setShowMedia(defaultMediaVisibility(status, displayMedia));
  }, [status.id]);

  const handleShowContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(true);
  };

  const handleHideContent = (event: React.MouseEvent<HTMLButtonElement>): any => {
    event.stopPropagation();
    setExpanded(false);
  };

  const handleToggleMediaVisibility = (): void => {
    setShowMedia(!showMedia);
  };

  const handleClick = (e?: React.MouseEvent): void => {
    e?.stopPropagation();

    // If the user is selecting text, don't focus the status.
    if (getSelection()?.toString().length) {
      return;
    }

    if (!e || !(e.ctrlKey || e.metaKey)) {
      if (onClick) {
        onClick();
      } else {
        history.push(statusUrl);
      }
    } else {
      window.open(statusUrl, '_blank');
    }
  };

  const handleHotkeyOpenMedia = (e?: KeyboardEvent): void => {
    const status = actualStatus;
    const firstAttachment = status.media_attachments.first();

    e?.preventDefault();

    if (firstAttachment) {
      if (firstAttachment.type === 'video') {
        dispatch(openModal('VIDEO', { status, media: firstAttachment, time: 0 }));
      } else {
        dispatch(openModal('MEDIA', { status, media: status.media_attachments, index: 0 }));
      }
    }
  };

  const handleHotkeyReply = (e?: KeyboardEvent): void => {
    e?.preventDefault();
    dispatch(replyCompose(actualStatus));
  };

  const handleHotkeyFavourite = (): void => {
    toggleFavourite(actualStatus);
  };

  const handleHotkeyBoost = (e?: KeyboardEvent): void => {
    const modalReblog = () => dispatch(toggleReblog(actualStatus));
    const boostModal = settings.get('boostModal');
    if ((e && e.shiftKey) || !boostModal) {
      modalReblog();
    } else {
      dispatch(openModal('BOOST', { status: actualStatus, onReblog: modalReblog }));
    }
  };

  const handleHotkeyMention = (e?: KeyboardEvent): void => {
    e?.preventDefault();
    dispatch(mentionCompose(actualStatus.account as AccountEntity));
  };

  const handleHotkeyOpen = (): void => {
    history.push(statusUrl);
  };

  const handleHotkeyOpenProfile = (): void => {
    history.push(`/@${actualStatus.account.acct}`);
  };

  const handleHotkeyMoveUp = (e?: KeyboardEvent): void => {
    if (onMoveUp) {
      onMoveUp(status.id, featured);
    }
  };

  const handleHotkeyMoveDown = (e?: KeyboardEvent): void => {
    if (onMoveDown) {
      onMoveDown(status.id, featured);
    }
  };

  const handleHotkeyToggleHidden = (): void => {
    dispatch(toggleStatusHidden(actualStatus));
  };

  const handleHotkeyToggleSensitive = (): void => {
    handleToggleMediaVisibility();
  };

  const handleHotkeyReact = (): void => {
    _expandEmojiSelector();
  };

  const handleUnfilter = () => dispatch(unfilterStatus(status.filtered.size ? status.id : actualStatus.id));

  const _expandEmojiSelector = (): void => {
    const firstEmoji: HTMLDivElement | null | undefined = node.current?.querySelector('.emoji-react-selector .emoji-react-selector__emoji');
    firstEmoji?.focus();
  };

  const renderStatusInfo = () => {
    if (isReblog && showGroup && group) {
      return (
        <StatusInfo
          avatarSize={avatarSize}
          icon={<Icon src={require('@tabler/icons/repeat.svg')} className='h-4 w-4 text-green-600' />}
          text={
            <FormattedMessage
              id='status.reblogged_by_with_group'
              defaultMessage='{name} reposted from {group}'
              values={{
                name: (
                  <Link
                    to={`/@${status.account.acct}`}
                    className='hover:underline'
                  >
                    <bdi className='truncate'>
                      <strong
                        className='text-gray-800 dark:text-gray-200'
                        dangerouslySetInnerHTML={{
                          __html: status.account.display_name_html,
                        }}
                      />
                    </bdi>
                  </Link>
                ),
                group: (
                  <Link to={`/group/${group.slug}`} className='hover:underline'>
                    <strong
                      className='text-gray-800 dark:text-gray-200'
                      dangerouslySetInnerHTML={{
                        __html: group.display_name_html,
                      }}
                    />
                  </Link>
                ),
              }}
            />
          }
        />
      );
    } else if (isReblog) {
      return (
        <StatusInfo
          avatarSize={avatarSize}
          icon={<Icon src={require('@tabler/icons/repeat.svg')} className='h-4 w-4 text-green-600' />}
          text={
            <FormattedMessage
              id='status.reblogged_by'
              defaultMessage='{name} reposted'
              values={{
                name: (
                  <Link to={`/@${status.account.acct}`} className='hover:underline'>
                    <bdi className='truncate'>
                      <strong
                        className='text-gray-800 dark:text-gray-200'
                        dangerouslySetInnerHTML={{
                          __html: status.account.display_name_html,
                        }}
                      />
                    </bdi>
                  </Link>
                ),
              }}
            />
          }
        />
      );
    } else if (featured) {
      return (
        <StatusInfo
          avatarSize={avatarSize}
          icon={<Icon src={require('@tabler/icons/pinned.svg')} className='h-4 w-4 text-gray-600 dark:text-gray-400' />}
          text={
            <FormattedMessage id='status.pinned' defaultMessage='Pinned post' />
          }
        />
      );
    } else if (showGroup && group) {
      return (
        <StatusInfo
          avatarSize={avatarSize}
          icon={<Icon src={require('@tabler/icons/circles.svg')} className='h-4 w-4 text-primary-600 dark:text-accent-blue' />}
          text={
            <FormattedMessage
              id='status.group'
              defaultMessage='Posted in {group}'
              values={{
                group: (
                  <Link to={`/group/${group.slug}`} className='hover:underline'>
                    <bdi className='truncate'>
                      <strong className='text-gray-800 dark:text-gray-200'>
                        <span dangerouslySetInnerHTML={{ __html: group.display_name_html }} />
                      </strong>
                    </bdi>
                  </Link>
                ),
              }}
            />
          }
        />
      );
    }
  };

  if (!status) return null;

  if (hidden) {
    return (
      <div ref={node}>
        <>
          {actualStatus.account.display_name || actualStatus.account.username}
          {actualStatus.content}
        </>
      </div>
    );
  }

  if (filtered && status.showFiltered) {
    const minHandlers = muted ? undefined : {
      moveUp: handleHotkeyMoveUp,
      moveDown: handleHotkeyMoveDown,
    };

    return (
      <HotKeys handlers={minHandlers}>
        <div className={clsx('status__wrapper text-center', { focusable })} tabIndex={focusable ? 0 : undefined} ref={node}>
          <Text theme='muted'>
            <FormattedMessage id='status.filtered' defaultMessage='Filtered' />: {status.filtered.join(', ')}.
            {' '}
            <button className='text-primary-600 hover:underline dark:text-accent-blue' onClick={handleUnfilter}>
              <FormattedMessage id='status.show_filter_reason' defaultMessage='Show anyway' />
            </button>
          </Text>
        </div>
      </HotKeys>
    );
  }

  let rebloggedByText;
  if (status.reblog && typeof status.reblog === 'object') {
    rebloggedByText = intl.formatMessage(
      messages.reblogged_by,
      { name: status.account.acct },
    );
  }

  let quote;

  if (actualStatus.quote) {
    if (actualStatus.pleroma.get('quote_visible', true) === false) {
      quote = (
        <div className='quoted-status-tombstone'>
          <p><FormattedMessage id='statuses.quote_tombstone' defaultMessage='Post is unavailable.' /></p>
        </div>
      );
    } else {
      quote = <QuotedStatus statusId={actualStatus.quote as string} />;
    }
  }

  const handlers = muted ? undefined : {
    reply: handleHotkeyReply,
    favourite: handleHotkeyFavourite,
    boost: handleHotkeyBoost,
    mention: handleHotkeyMention,
    open: handleHotkeyOpen,
    openProfile: handleHotkeyOpenProfile,
    moveUp: handleHotkeyMoveUp,
    moveDown: handleHotkeyMoveDown,
    toggleHidden: handleHotkeyToggleHidden,
    toggleSensitive: handleHotkeyToggleSensitive,
    openMedia: handleHotkeyOpenMedia,
    react: handleHotkeyReact,
  };

  const isUnderReview = actualStatus.visibility === 'self';
  const isSensitive = actualStatus.hidden;
  const isSoftDeleted = status.tombstone?.reason === 'deleted';

  if (isSoftDeleted) {
    return (
      <Tombstone
        id={status.id}
        onMoveUp={(id) => onMoveUp ? onMoveUp(id) : null}
        onMoveDown={(id) => onMoveDown ? onMoveDown(id) : null}
      />
    );
  }

  const hasMedia = (quote || actualStatus.card || actualStatus.media_attachments.size > 0);
  const hasMediaAndNoCW = hasMedia && !actualStatus.spoiler_text;

  // TODO: This is ridiculous, merge 'status', 'quoted-status', and 'detailed-status' common codes
  return (
    <HotKeys handlers={handlers} data-testid='status'>
      <div
        className={clsx('status cursor-pointer', { focusable })}
        tabIndex={focusable && !muted ? 0 : undefined}
        data-featured={featured ? 'true' : null}
        aria-label={textForScreenReader(intl, actualStatus, rebloggedByText)}
        ref={node}
        onClick={handleClick}
        role='link'
      >
        <Card
          variant={variant}
          className={clsx('status__wrapper space-y-4', `status-${actualStatus.visibility}`, {
            'py-6 sm:p-5': variant === 'rounded',
            'status-reply': !!status.in_reply_to_id,
            muted,
            read: unread === false,
          })}
          data-id={status.id}
        >
          {renderStatusInfo()}

          <AccountContainer
            key={actualStatus.account.id}
            id={actualStatus.account.id}
            timestamp={actualStatus.created_at}
            timestampUrl={statusUrl}
            action={accountAction}
            hideActions={!accountAction}
            showEdit={!!actualStatus.edited_at}
            showProfileHoverCard={hoverable}
            withLinkToProfile={hoverable}
            approvalStatus={actualStatus.approval_status}
            avatarSize={avatarSize}
          />

          <div className='status__content-wrapper'>
            <StatusReplyMentions status={actualStatus} hoverable={hoverable} />

            {((isUnderReview || isSensitive) && actualStatus.spoiler_text) && (
              <div className='pb-4'>
                <Text className='line-clamp-6' theme='white' size='md' weight='medium'>
                  <span dangerouslySetInnerHTML={{ __html: actualStatus.spoilerHtml }} />
                </Text>
              </div>
            )}

            <div className='relative'>

              {(!hasMediaAndNoCW && !isExpanded && (isUnderReview || isSensitive)) && (
                <div className='absolute z-[1] flex h-full w-full items-center justify-center'>
                  <Button
                    type='button'
                    theme='primary'
                    size='sm'
                    icon={require('@tabler/icons/eye.svg')}
                    onClick={handleShowContent}
                  >
                    {intl.formatMessage(messages.show)}
                  </Button>
                </div>
              )}

              <Stack
                className={clsx('relative z-0', {
                  'max-h-24 overflow-hidden blur-sm select-none pointer-events-none': !hasMediaAndNoCW && !isExpanded,
                })}
              >

                {actualStatus.event ? <EventPreview className='shadow-xl' status={actualStatus} /> : (
                  <Stack space={4}>
                    <StatusContent
                      status={actualStatus}
                      onClick={handleClick}
                      collapsable
                      translatable
                    />

                    <TranslateButton status={actualStatus} />

                    {(hasMedia) && (
                      <Stack space={4}>
                        <StatusMedia
                          status={actualStatus}
                          muted={muted}
                          onClick={handleClick}
                          showMedia={actualStatus.spoiler_text ? true : showMedia}
                          showSensitiveOverlay={hasMediaAndNoCW}
                          onToggleVisibility={handleToggleMediaVisibility}
                        />

                        {quote}
                      </Stack>
                    )}
                  </Stack>
                )}

                {(!hasMediaAndNoCW && isExpanded && (isUnderReview || isSensitive)) && (
                  <div className='flex w-full justify-center pt-2'>
                    <Button
                      type='button'
                      theme='primary'
                      size='sm'
                      icon={require('@tabler/icons/eye-off.svg')}
                      onClick={handleHideContent}
                    >
                      {intl.formatMessage(messages.hide)}
                    </Button>
                  </div>
                )}
              </Stack>
            </div>

            {(!hideActionBar && !isUnderReview) && (
              <div className='pt-4'>
                <StatusActionBar status={actualStatus} />
              </div>
            )}
          </div>
        </Card>
      </div >
    </HotKeys >
  );
};

export default Status;
