import PropTypes from 'prop-types';
import './button.css';

export function Button(props) {

  const variant = props.variant || 'text';

  return (
    <button 
    className={`
      button
      ${props.bordered ? ' border' : ''}
      ${props.scale ? ' scale' : ''}
      ${props.highlightSmoothingText ? ' hightlight-smoothing-text' : ''}
      ${variant}
      ${props.link ? ' link ' : ''}
      `}
      >
        {props.adornmentLeft}
        <span>{props.children}</span>
        {props.adornmentRight}
      </button>   
  );
}

Button.propTypes = {
  children: PropTypes.elementType,
  adornmentLeft: PropTypes.elementType,
  adornmentRight: PropTypes.elementType,
  bordered: PropTypes.boolean,
  scale: PropTypes.boolean,
  highlightSmoothingText: PropTypes.boolean,
  variant: PropTypes.string, // contained, outlined, text
  link: PropTypes.boolean,
};