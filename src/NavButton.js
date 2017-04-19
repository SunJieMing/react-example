import React from 'react';
import PropTypes from 'prop-types';

const NavButton = (props) => {
  return (
    <li
      className={`${ props.selected ? 'selected' : '' }`}
      onClick={() => (props.clickHandler(props.title))}>
      {props.title}
    </li>
  );
};

NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default NavButton;
