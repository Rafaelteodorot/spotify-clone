import PropTypes from 'prop-types';
import './icon.css';
import React from 'react';

export function Icon(props) {
  const children = React.Children.map(props.children, (child) => React.cloneElement(child, {
    className: `
    icon
    ${props.size || 'md'}
    ${props.color || 'gray'}
    ${props.highlightSmoothing ? ' highlight-smoothing' : ''}
    `,
  }));

  return children;
}

Icon.propTypes = {
  children: PropTypes.elementType,
  highlightSmoothing: PropTypes.boolean,
  size: PropTypes.string, // sm, md, lg
  color: PropTypes.string, // gray, green
  adormentRight: PropTypes.string, // lado direito
};