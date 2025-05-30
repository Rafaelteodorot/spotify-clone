import PropTypes from 'prop-types';

export function IconDownApp(props) {
  return (
    <svg
      style={{
        verticalAlign: 'middle', // Alinha verticalmente com o texto
        paddingInlineEnd: '5px',
      }}

      className={props.className} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
    >
      <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z">
      </path>
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z">
      </path>
    </svg>
  );
}

IconDownApp.propTypes = {
  className: PropTypes.string.isRequired
};