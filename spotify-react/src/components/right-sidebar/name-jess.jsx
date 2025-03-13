import PropTypes from 'prop-types';

function BandCardRoot(props) {
  const { children } = props;
  return (
    <button className="about-artist card" id="about-artist-button">
      {children}
    </button>
  );
}

BandCardRoot.propTypes = {
  children: PropTypes.elementType,
};

function BandCardImage(props) {
  const { src } = props;

  return (
    <img src={src} />
  );
}

BandCardImage.propTypes = {
  src: PropTypes.string,
};

function BandCardContainer(props) {
  const { children } = props;

  return (
    <div>{children}</div>
  );
}

BandCardContainer.propTypes = {
  children: PropTypes.elementType,
};

function BandCardName(props) {
  const { children } = props;

  return (
    <a href="#" className="font-title link font-bold">{children}</a>
  );
}

BandCardName.propTypes = {
  children: PropTypes.elementType,
};

function BandCardActionsContainer(props) {
  const { children } = props;

  return (
  <div>{children}</div>
  );
}

BandCardActionsContainer.propTypes = {
  children: PropTypes.elementType,
};

function BandCardNumberOfListeners(props) {
  const { children } = props;

  return (
    <span className="text-gray font-text">{children}</span>
  );
}

BandCardNumberOfListeners.propTypes = {
  children: PropTypes.elementType,
};

function BandCardFollowButton(props) {
  const { children } = props;

  return (
    <div className="button follow">{children}</div>
  );
}

BandCardFollowButton.propTypes = {
  children: PropTypes.elementType,
};

function BandCardMoreInfoContainer(props) {
  const { children } = props;

  return (
    <div>{children}</div>
  );
}

BandCardMoreInfoContainer.propTypes = {
  children: PropTypes.elementType,
};

function BandCardMoreInfoTitle(props) {
  const { children } = props;

  return (
    <span className="text-gray font-text font-bold text-uppercase">{children}</span>
  );
}

BandCardMoreInfoTitle.propTypes = {
  children: PropTypes.elementType,
};

function BandCardMoreInfoDescription(props) {
  const { children } = props;

  return (
    <span className="text-gray font-text font-bold">{children}</span>
  );
}

BandCardMoreInfoDescription.propTypes = {
  children: PropTypes.elementType,
};


export const BandCardComposition = {
  Root: BandCardRoot,
  Image: BandCardImage,
  Container: BandCardContainer,
  Name: BandCardName,
  ActionsContainer: BandCardActionsContainer,
  NumberOfListeners: BandCardNumberOfListeners,
  FollowButton: BandCardFollowButton,
  MoreInfoContainer: BandCardMoreInfoContainer,
  MoreInfoTitle: BandCardMoreInfoTitle,
  MoreInfoDescription: BandCardMoreInfoDescription,
};