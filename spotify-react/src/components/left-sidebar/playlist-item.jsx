import './playlist-item.css';
import PropTypes from 'prop-types';
import { Icon } from '../icons/icon';
import { IconButton } from '../buttons/icon-button';


function PlaylistItemRoot(props) {
  return (
    <li className="playlist-item flex">
      {props.children}
    </li>
  );
}

PlaylistItemRoot.propTypes = {
  children: PropTypes.elementType,
};

function PlaylistItemImage(props) {
  return (
    <img src={props.src} />
  );
}

PlaylistItemImage.propTypes = {
  src: PropTypes.string,
};

function PlaylistIconFolder() {
  return (
    <div className="folder">
      <Icon>
        <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="folder" viewBox="0 0 24 24">
          <path
            d="M1 4a2 2 0 0 1 2-2h5.155a3 3 0 0 1 2.598 1.5l.866 1.5H21a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7.155 0H3v16h18V7H10.464L9.021 4.5a1 1 0 0 0-.866-.5z">
          </path>
        </svg>
      </Icon>
    </div>
  );
}

function PlaylistItemContent(props) {
  return <div className="info">{props.children}</div>;
}

PlaylistItemContent.propTypes = {
  children: PropTypes.elementType,
};

function PlaylistItemTitle(props) {
  return <h3 className="text-white">{props.children}</h3>;
}

PlaylistItemTitle.propTypes = {
  children: PropTypes.elementType,
};

function PlaylistItemContainerDescription(props) {
  return <span>{props.children}</span>;
}

PlaylistItemContainerDescription.propTypes = {
  children: PropTypes.elementType,
};

function PlaylistItemIcon() {
  return (
    <Icon size="xs">
      <svg className="xs-icon" data-encore-id="icon" role="img" aria-hidden="false" viewBox="0 0 16 16">
        <title>Fixado</title>
        <path
          d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z">
        </path>
      </svg>
    </Icon>
  );
}

function PlaylistItemDescription(props) {
  return (
  <span>{props.children}</span>
);
}

PlaylistItemDescription.propTypes = {
  children: PropTypes.children,
};

function PlaylistItemButton() {
  return (
    <IconButton>
      <Icon size="sm">
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="m14 6-6 6-6-6h12z"></path>
        </svg>
      </Icon>
    </IconButton>
  );
}

export const PlaylistItem = {
  Root: PlaylistItemRoot,
  IconFolder: PlaylistIconFolder,
  Image: PlaylistItemImage,
  Content: PlaylistItemContent,
  Title: PlaylistItemTitle,
  ContainerDescription: PlaylistItemContainerDescription,
  Icon: PlaylistItemIcon,
  Description: PlaylistItemDescription,
  Button: PlaylistItemButton,
};