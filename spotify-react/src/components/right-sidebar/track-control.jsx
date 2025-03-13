import PropTypes from 'prop-types';
import { Button } from '../buttons/button';
import { Icon } from '../icons/icon';
import { RightSidebarIcon } from './right-sidebar-icon';
import { RightSidebarCloseIcon } from './right-sidebar-close-icon';

export function TrackControl(props) {
  const { songName } = props;

  return (
    <header>
      <a href="#">{songName}</a>
      <div>
        <Button>
          <Icon highlightSmoothing size='sm'>
            <RightSidebarIcon />
          </Icon>
        </Button>

        <Button>
          <Icon highlightSmoothing size='sm'>
            <RightSidebarCloseIcon />
          </Icon>
        </Button>
      </div>
    </header>
  );
}

TrackControl.propTypes = {
  songName: PropTypes.string.isRequired,
};