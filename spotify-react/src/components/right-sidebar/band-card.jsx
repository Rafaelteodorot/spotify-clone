import PropTypes from 'prop-types';

export function BandCard(props) {
  const { imageSrc, bandName, numberOfListeners, website } = props;

  return (
    <button className="about-artist card" id="about-artist-button">
      <img src={imageSrc} />
      <div>
        <a href="#" className="font-title link font-bold">{bandName}</a>
        <div>
          <span className="text-gray font-text">{numberOfListeners} ouvintes mensais</span>
          <div className="button follow">Seguir</div>
        </div>
        <div>
          <span className="text-gray font-text font-bold text-uppercase">{bandName}</span>
          <span className="text-gray font-text font-bold">{website}</span>
        </div>
      </div>
    </button>
  );
}

BandCard.propTypes = {
  imageSrc: PropTypes.string,
  bandName: PropTypes.string,
  numberOfListeners: PropTypes.string,
  website: PropTypes.string,
};