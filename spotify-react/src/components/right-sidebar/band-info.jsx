import PropTypes from 'prop-types';

export function BandInfo(props) {
  const { bandName, members } = props;

  return (
    <div className="card">
      <div className="flex justify-space-between items-center">
        <span className="font-title text-white">Créditos</span>
        <button id="about-credits-button" className="button-link">Mostrar tudo</button>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col">
          <a className="link text-white" href="#">{bandName}</a>
          <span className="text-gray font-text font-14px">Artista Principal</span>
        </div>
        <button className="button follow">Seguir</button>
      </div>

      {members.map((member) => {
        return (
          <div key={member.name} className="flex flex-col">
            <span className="text-white">{member.name}</span>
            <span className="text-gray font-text font-14px">
              {member.roles.join(", ")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

BandInfo.propTypes = {
  bandName: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};