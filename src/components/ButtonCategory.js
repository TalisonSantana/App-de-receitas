import React from 'react';
import PropTypes from 'prop-types';

function ButtonCategory(props) {
  const {
    children, nameCategory, handleClickButton, name,
  } = props;

  return (
    <button
      onClick={ (event) => handleClickButton(event) }
      type="button"
      name={ nameCategory }
      data-testid={ `${nameCategory}-category-filter` }
    >
      { name }
      { children }
    </button>
  );
}

ButtonCategory.propTypes = {
  children: PropTypes.string,
}.isRequire;

export default ButtonCategory;
