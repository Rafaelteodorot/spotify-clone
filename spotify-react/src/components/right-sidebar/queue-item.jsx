import PropTypes from 'prop-types';
import { Button } from '../buttons/button';

function QueueItemRoot(props) {
  const { children } = props;

  return (
    <div className="card">{children}</div>
  );
}

QueueItemRoot.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemActions(props) {
  const { children } = props;

  return (
    <div className="flex justify-space-between items-center">
      {children}
    </div>
  );
}

QueueItemActions.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemIndicator(props) {
  const { children } = props;

  return (
    <span className="font-title text-white">{children}</span>
  );
}

QueueItemIndicator.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemButton() {
  return (
    <Button highlightSmoothingText scale link>Abrir fila</Button>
  );
}

QueueItemButton.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemNextTrack(props) {
  const { children } = props;

  return (
    <div className="card-track">{children}</div>
  );
}

QueueItemNextTrack.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemIcon() {
  return (
      <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="icon">
        <path d="M10 2v9.5a2.75 2.75 0 1 1-2.75-2.75H8.5V2H10zm-1.5 8.25H7.25A1.25 1.25 0 1 0 8.5 11.5v-1.25z">
        </path>
      </svg>
  );
}

function QueueItemImage(props) {
  return (
    <img src={props.src} />
  );
}

QueueItemImage.propTypes = {
  src: PropTypes.string,
};

function QueueItemTrackInfo(props) {
  const { children } = props;

  return (
    <div className="flex flex-col">{children}</div>
  );
}

QueueItemTrackInfo.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemSongName(props) {
  const { children } = props;

  return (
    <a className="link text-white" href="#">{children}</a>
  );
}

QueueItemSongName.propTypes = {
  children: PropTypes.elementType,
};

function QueueItemArtistName(props) {
  const {children } = props;

  return (
    <a className="link text-gray" href="#">{children}</a>
  );
}

QueueItemArtistName.propTypes = {
  children: PropTypes.elementType,
};

export const QueueItem = {
  Root: QueueItemRoot,
  Actions: QueueItemActions,
  Indicator: QueueItemIndicator,
  Button: QueueItemButton,
  NextTrack: QueueItemNextTrack,
  Icon: QueueItemIcon,
  Image: QueueItemImage,
  TrackInfo: QueueItemTrackInfo,
  SongName: QueueItemSongName,
  ArtistName: QueueItemArtistName,
};