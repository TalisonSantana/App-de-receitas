import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context';

function IngredientsCheckbox({ ingredient, idDaReceita, indexIngredient }) {
  // const [ingredients, setIngredients] = useState([]);
  const [finishedDrinks, setFinishedDrinks] = useState([]);

  console.log('idDaReceita Inprogress', idDaReceita);

  // useEffect(() => {
  //   const keys = Object.keys(drinks);
  //   // console.log(keys);
  //   const myRegex = /strIngredient/gi;
  //   const filterWithRegex = keys.filter((el) => el.match(myRegex));
  //   // console.log('filterWithRegex', filterWithRegex);
  //   const valores = filterWithRegex.map((el) => drinks[el]);
  //   // console.log('valores', valores);
  //   setIngredients(valores);
  // }, [drinks]);

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const { drinks: drinksLocal } = getLocal;
      if (drinksLocal[idDaReceita]) {
        setFinishedDrinks(...drinksLocal[idDaReceita]);
        console.log('drinksLocal', drinksLocal[idDaReceita][0]);
        console.log('Passou');
      }
    }
  }, [idDaReceita]);

  const handleChange = (target) => {
    setFinishedDrinks((prevState) => (
      { ...prevState, [target.name]: target.checked }
    ));
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        drinks: {
          [idDaReceita]: [{ ...finishedDrinks, [target.name]: target.checked }],
        },
      },
    ));
  };

  return (
  // <section className="d-flex flex-column">

    <label
      htmlFor={ ingredient }
      style={ { textDecoration: finishedDrinks[ingredient] && 'line-through' } }
      data-testid={ `${indexIngredient}-ingredient-step` }
    >
      <input
        type="checkbox"
        id={ ingredient }
        checked={ finishedDrinks[ingredient] }
        name={ ingredient }
        onChange={ ({ target }) => handleChange(target) }
      />
      {ingredient}
    </label>

  // </section>
  );
}

IngredientsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsCheckbox;
