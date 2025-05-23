import PropTypes from 'prop-types';

export function IconArrowRight(props) {
  return (
    <svg
      className={props.className} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z">
      </path>
    </svg>
  );
}

IconArrowRight.propTypes = {
  className: PropTypes.string.isRequired,
};