import PropTypes from 'prop-types';
import './content-card.css';

function ContentCardRoot(props) {
  const children = props.children;

  return (
    <div className="section-card">{children}</div>
  );
}

ContentCardRoot.propTypes = {
  children: PropTypes.elementType,
};

function ContentCardImgContainer(props) {
const children = props.children;

  return (
    <div>{children}</div>
  );
}

ContentCardImgContainer.propTypes = {
  children: PropTypes.elementType,
};

function ContentCardImg(props) {
  const src = props.src;

  return (
    <img src={src} />
  );
}

ContentCardImg.propTypes = {
  src: PropTypes.string,
};

function ContentCardDescription(props) {
  const children = props.children;

  return (
    <span>{children}</span>
  );
}

ContentCardDescription.propTypes = {
  children: PropTypes.elementType,
};


export const ContentCard = {
  Root: ContentCardRoot,
  ImgContainer: ContentCardImgContainer,
  Img: ContentCardImg,
  Description: ContentCardDescription,
};