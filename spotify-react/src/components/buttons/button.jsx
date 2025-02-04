import PropTypes from 'prop-types';
import './button.css';

export function Button(props) {
  return (
    <button className={`button${props.bordered ? ' border' : ''}${props.scale ? ' scale' : ''}${props.highlightSmoothingText ? ' hightlight-smoothing-text' : ''}`}>{props.adornmentLeft}<span>{props.children}</span></button>   
  );
}

Button.propTypes = {
  children: PropTypes.elementType,
  adornmentLeft: PropTypes.elementType,
  bordered: PropTypes.boolean,
  scale: PropTypes.boolean,
  highlightSmoothingText: PropTypes.boolean,
};