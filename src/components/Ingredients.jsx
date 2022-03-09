import React, { } from 'react';
import PropTypes from 'prop-types';
// import MyContext from '../context';

function Ingredients({ item }) {
  const keys = Object.keys(item);
  const myRegex = /strIngredient/gi;
  const filterWithRegex = keys.filter((el) => el.match(myRegex));

  // console.log('keys', item);
  // console.log('filterWithRegex', filterWithRegex);
  // console.log(filterWithRegex.map((el) => item[el]));

  const valores = filterWithRegex.map((el) => item[el]);

  return (
    <section className="d-flex flex-column">
      {valores.map((elemento, index) => (
        elemento
        && (
          <section>
            <input type="checkbox" />
            <span
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              {elemento}
            </span>
          </section>
        )
      ))}
    </section>
  );
}

Ingredients.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
}.isRequire;

export default Ingredients;
