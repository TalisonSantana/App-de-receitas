import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context';

function IngredientsCheckbox({ drinks, dataDrinks }) {
  const [recipes, setRecipes] = useState('');
  const [finishedDrinks, setFinishedDrinks] = useState([]);

  console.log(recipes);
  console.log('DataDrinks', Object.keys(dataDrinks)[0]);

  useEffect(() => {
    setRecipes(Object.keys(dataDrinks)[0]);
  }, [dataDrinks]);

  useEffect(() => {
    const arrayAntigo = localStorage.getItem('inProgressRecipes');

    if (arrayAntigo.length !== null) {
      const novoArray = {
        ...JSON.parse(arrayAntigo),
        cocktails: {
          [drinks.idDrink]: [finishedDrinks],
        },
      };

      localStorage.setItem('inProgressRecipes', JSON.stringify(novoArray));
    } else {
      const novoArray = {
        cocktails: {
          [drinks.idDrink]: [finishedDrinks],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(novoArray));
    }
  }, [drinks.idDrink, finishedDrinks]);

  const handleChange = (target) => {
    setFinishedDrinks(
      (prevState) => ({ ...prevState, [target.name]: target.checked }),
    );
    console.log(finishedDrinks);
  };

  const ingredientList = () => {
    const keys = Object.keys(drinks);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => drinks[el]);

    return (
      <section className="d-flex flex-column">
        {valores.map((elemento, index) => (
          elemento
        && (
          <section key={ index }>
            <label
              htmlFor={ elemento }
              style={ { textDecoration: finishedDrinks[elemento] && 'line-through' } }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ elemento }
                checked={ finishedDrinks[elemento] }
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

IngredientsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsCheckbox;
