import PropTypes from 'prop-types';
import './button.css';

export function Button(prosp) {
  return (
    <button className='button'>{prosp.children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.elementType
};