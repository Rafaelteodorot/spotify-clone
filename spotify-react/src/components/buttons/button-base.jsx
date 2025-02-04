import PropTypes from 'prop-types';
import '../buttons/button-base.css';

export function ButtonBase(props) {
  return (
    <button>
      className={`
      button-base
      ${props.ButtonBase ? 'button-base' : ''}
      ${props.scale ? 'scale' : ''}
      `}

      {props.Children}
    </button>
  );
}

ButtonBase.propTypes = {
Children: PropTypes.elementType,
ButtonBase: PropTypes.boolean,
};