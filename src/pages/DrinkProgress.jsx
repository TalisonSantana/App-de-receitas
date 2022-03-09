import React, { useEffect, useState } from 'react';
import { FetchDrinks } from '../services';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Ingredients from '../components/Ingredients';
import './css/FoodProgress.css';

function DrinkProgress() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    async function api() {
      // const APIEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const APIEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';
      const result = await FetchDrinks(APIEndPoint);
      console.log('result', result);
      setDrinksIngredients(result);
    }
    api();
  }, []);
  return (
    <div>
      {drinksIngredients.map((item, index) => (
        <section key={ item.idDrink } className="receita">
          <section className="container__image">
            <img
              className="image"
              data-testid="recipe-photo"
              src={ item.strDrinkThumb }
              alt="strMealThumb"
            />
          </section>
          <section className="container__title-buttons">
            <section className="container__title">
              <span data-testid="recipe-title">{item.strDrink}</span>
              <span data-testid="recipe-category">{item.strCategory}</span>
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
            <Ingredients key={ index } item={ item } index={ index } />
          </section>
          <section className="container__instructions">
            <span>Instructions</span>
            <p
              data-testid="instructions"
              className="instructions"
            >
              {item.strInstructions}
            </p>
          </section>
          <section className="container__button">
            <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
          </section>
        </section>
      ))}
    </div>

  );
}

export default DrinkProgress;
