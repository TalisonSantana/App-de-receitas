import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context';

function IngredientsFoodsCheckbox({ meals }) {
  const [finishedFoods, setFinishedFoods] = useState([]);

  // const handleLocalStorage = () => {
  //   const objetoAntigo = localStorage.getItem('inProgressRecipes');

  //   if (objetoAntigo.length !== null) {
  //     const novoObjeto = {
  //       ...JSON.parse(objetoAntigo),
  //       meals: {
  //         [meals.idMeal]: [finishedFoods],
  //       },
  //     };

  //     localStorage.setItem('inProgressRecipes', JSON.stringify(novoObjeto));
  //   } else {
  //     const novoObjeto = {
  //       meals: {
  //         [meals.idMeal]: [finishedFoods],
  //       },
  //     };
  //     localStorage.setItem('inProgressRecipes', JSON.stringify(novoObjeto));
  //   }
  // };

  useEffect(() => {
    const objetoAntigo = localStorage.getItem('inProgressRecipes');

    if (objetoAntigo.length !== null) {
      const novoObjeto = {
        ...JSON.parse(objetoAntigo),
        meals: {
          [meals.idMeal]: [finishedFoods],
        },
      };

      localStorage.setItem('inProgressRecipes', JSON.stringify(novoObjeto));
    } else {
      const novoObjeto = {
        meals: {
          [meals.idMeal]: [finishedFoods],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(novoObjeto));
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        meals: {
          [meals.idMeal]: [finishedFoods],
        },
      },
    ));
  }, [meals.idMeal, finishedFoods]);

  const handleChange = (target) => {
    handleLocalStorage();
    setFinishedFoods(
      (prevState) => ({ ...prevState, [target.name]: target.checked }),
    );
    console.log(finishedFoods);
  };

  const ingredientList = () => {
    const keys = Object.keys(meals);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => meals[el]);

    return (
      <section className="d-flex flex-column">
        {valores.map((elemento, index) => (
          elemento
        && (
          <section key={ index }>
            <label
              htmlFor={ elemento }
              style={ { textDecoration: finishedFoods[elemento] && 'line-through' } }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ elemento }
                checked={ finishedFoods[elemento] }
                name={ elemento }
                onChange={ ({ target }) => handleChange(target) }
              />
              {elemento}
            </label>
          </section>
        )
        ))}
      </section>
    );
  };
  return (
    <div>{ingredientList()}</div>
  );
}

IngredientsFoodsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsFoodsCheckbox;
