import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function Ingredients({ item }) {
  const [recipes, setRecipes] = useState({});
  const [finishedIngredient, setFinishedIngredient] = useState(false);

  useEffect(() => {
    setRecipes(Object.keys(item).find((elemento) => elemento === 'idDrink'));
  }, []);

  const ingredientList = () => {
    const keys = Object.keys(item);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => item[el]);

    return (
      <section className="d-flex flex-column">
        {valores.map((elemento, index) => (
          elemento
        && (
          <section key={ index }>
            <input
              type="checkbox"
              checked={ finishedIngredient }
              name="finishedIngredient"
              // value={ finishedIngredient[valores.name] }
              onChange={ ({ target }) => setFinishedIngredient(target.checked) }
            />
            <span
              style={ { textDecoration: finishedIngredient && 'line-through' } }
              data-testid={ `${index}-ingredient-step` }
            >
              {elemento}
            </span>
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
            src={ recipes ? item.strDrinkThumb : item.strMealThumb }
            alt="strMealThumb"
          />
        </section>
        <section className="container__title-buttons">
          <section className="container__title">
            <span
              data-testid="recipe-title"
            >
              {recipes ? item.strDrink : item.strMeal}
            </span>
            <span
              data-testid="recipe-category"
            >
              {recipes ? item.strCategory : item.strCategory}
            </span>
            {recipes && (
              <span>{item.strAlcoholic}</span>
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
            {recipes ? item.strInstructions : item.strInstructions}
          </p>
        </section>
        <section className="container__button">
          <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
        </section>
      </section>
    </section>
  );
}

Ingredients.propTypes = {
  item: PropTypes.object,
}.isRequire;

export default Ingredients;
