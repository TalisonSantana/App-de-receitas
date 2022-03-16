import React, { useEffect, useState } from 'react';

function IngredientsCheckbox({ ingredient, idDaReceita, indexIngredient, path }) {
  const [finishedPlate, setFinishedDrinks] = useState([]);

  // console.log('idDaReceita Inprogress', idDaReceita);
  // console.log('finishedPlate', finishedPlate);
  console.log('inProgress', path);

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const { cocktails } = getLocal;
      if (cocktails[idDaReceita]) {
        setFinishedDrinks(...cocktails[idDaReceita]);
        // console.log('cocktails', cocktails[idDaReceita][0]);
        // console.log('Passou');
      }
    }
  }, [idDaReceita]);

  const handleChange = (target) => {
    setFinishedDrinks((prevState) => (
      { ...prevState, [target.name]: target.checked }
    ));

    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const { meals } = getLocal;
      const { cocktails } = getLocal;
      if (path === '/foods/:idDaReceita/in-progress') {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
            meals: {
              ...meals,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
          },
        ));
      }
      if (path === '/drinks/:idDaReceita/in-progress') {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
            meals: {
              ...meals,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
          },
        ));
      }
    }
  };

  return (

    <label
      htmlFor={ ingredient }
      style={ { textDecoration: finishedPlate[ingredient] && 'line-through' } }
      data-testid={ `${indexIngredient}-ingredient-step` }
    >
      <input
        type="checkbox"
        id={ ingredient }
        checked={ finishedPlate[ingredient] }
        name={ ingredient }
        onChange={ ({ target }) => handleChange(target) }
      />
      {ingredient}
    </label>

  );
}

IngredientsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsCheckbox;
