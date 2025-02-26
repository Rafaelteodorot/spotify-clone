import './playlist-item.css';
import PropTypes from 'prop-types';
import { Icon } from '../icons/icon';
import { IconButton } from '../buttons/icon-button';


function PlayListItemRoot(props) {
  return (
    <li className="playlist-item flex">
      {props.children}
    </li>
  );
}

PlayListItemRoot.propsType = {
  children: PropTypes.elementType,
}

function PlayListItemImage(props) {
  return (
    <img src={props.src} />
  );
}

PlayListItemImage.propsType = {
  src: PropTypes.string,
}

function PlayListItemContent(props) {
  return <div className="info">{props.children}</div>
}

PlayListItemContent.propsType = {
  children: PropTypes.elementType,
}

function PlayListItemTitle(props) {
  return <h3 className="text-white">{props.children}</h3>
}

PlayListItemTitle.propsType = {
  children: PropTypes.elementType,
}

function PlayListItemContainerDescription(props) {
  return <span>{props.children}</span>
}

PlayListItemContainerDescription.propsType = {
  children: PropTypes.elementType,
}

function PlayListItemIcon() {
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

function PlayListItemDescription(props) {
  return <span>{props.children}</span>
}

PlayListItemDescription.propsTypes = {
  children: PropTypes.children,
};

function PlayListIconFolder() {
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

function PlayListItemButton() {
  return (
    <IconButton>
      <Icon size="sm">
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="m14 6-6 6-6-6h12z"></path>
        </svg>
      </Icon>
    </IconButton>
  )
}

export const PlayListItem = {
  Root: PlayListItemRoot,
  IconFolder: PlayListIconFolder,
  Image: PlayListItemImage,
  Content: PlayListItemContent,
  Title: PlayListItemTitle,
  ContainerDescription: PlayListItemContainerDescription,
  Icon: PlayListItemIcon,
  Description: PlayListItemDescription,
  Button: PlayListItemButton,
}