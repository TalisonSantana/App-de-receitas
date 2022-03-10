import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DrinksIngredients({ drinks, dataDrinks }) {
  const [recipes, setRecipes] = useState('');
  const [finishedDrinks, setFinishedDrinks] = useState([]);

  console.log('drinks', drinks);

  console.log('DataDrinks', Object.keys(dataDrinks)[0]);
  useEffect(() => {
    setRecipes(Object.keys(dataDrinks)[0]);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        cocktails: {
          [drinks.idDrink]: [finishedDrinks],
        },
      },
    ));
  }, [finishedDrinks]);

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
    <section className="receita">
      <section>
        <section className="container__image">
          <img
            className="image"
            data-testid="recipe-photo"
            src={ drinks.strDrinkThumb }
            alt="strDrinkThumb"
          />
        </section>
        <section className="container__title-buttons">
          <section className="container__title">
            <span
              data-testid="recipe-title"
            >
              { drinks.strDrink }
            </span>
            <span
              data-testid="recipe-category"
            >
              { drinks.strCategory }
            </span>
            {recipes === 'drinks' && (
              <span>{drinks.strAlcoholic}</span>
            )}
          </section>
          <section className="container__buttons">
            <img
              height="26px"
              data-testid="share-btn"
              src={ shareIcon }
              alt="shareIcon"
            />
            <img
              height="26px"
              data-testid="favorite-btn"
              src={ whiteHeartIcon }
              alt="shareIcon"
            />
          </section>
        </section>
        <section className="container__ingredientes">
          <p>Ingredientes</p>
          {ingredientList()}
        </section>
        <section className="container__instructions">
          <span>Instructions</span>
          <p
            data-testid="instructions"
            className="instructions"
          >
            { drinks.strInstructions }
          </p>
        </section>
        <section className="container__button">
          <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
        </section>
      </section>
    </section>
  );
}

DrinksIngredients.propTypes = {
  foods: PropTypes.object,
}.isRequire;

export default DrinksIngredients;
