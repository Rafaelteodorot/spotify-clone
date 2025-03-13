import PropTypes from 'prop-types';
import { Button } from '../buttons/button';
import { Icon } from '../icons/icon';
import { RightSidebarCheckIcon } from './right-sidebar-check-icon';

export function TrackInfo(props) {
  const { imageSrc, songName, bandName } = props;

  return (
    <div className="track-info">
      <div>
        <a href="#">
          <img src={imageSrc} />
        </a>
      </div>
      <div>
        <div className="artist-info">
          <a href="#">{songName}</a>
          <a href="#">{bandName}</a>
        </div>

        <Button>
          <Icon color='green'>
            <RightSidebarCheckIcon />
          </Icon>
        </Button>
      </div>
    </div>
  );
}

TrackInfo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  bandName: PropTypes.string.isRequired,
};