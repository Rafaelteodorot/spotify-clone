import PropTypes from 'prop-types';

export function RightSidebarIcon(props) {
  return (
    <svg
      className={props.className} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" 
    >
      <path
        d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
      </path>
    </svg>
  );
}

RightSidebarIcon.propTypes = {
  className: PropTypes.string.isRequired,
};