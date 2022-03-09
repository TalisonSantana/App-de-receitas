import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MyContext from '../context';

function CardsRecipes() {
  const INDEX = 12;
  const location = useLocation();
  const [renderDrinks, setRenderDrinks] = useState(false);
  const [renderFoods, setRenderFoods] = useState(false);
  const {
    arrFilterFoods,
    arrFilterDrinks,
  } = useContext(MyContext);

  const arrFilter = arrFilterFoods.length > 1
   || arrFilterDrinks.length > 1;

  const changeArray = (array) => {
    const renderArray = array;
    if (renderArray.length > INDEX) {
      renderArray.length = INDEX;
      return renderArray;
    }
    return renderArray;
  };

  const checkArray = () => {
    if (location.pathname.includes('drinks') && arrFilter) {
      changeArray(arrFilterDrinks);
      setRenderDrinks(true);
    }
    if (location.pathname.includes('foods') && arrFilter) {
      changeArray(arrFilterFoods);
      setRenderFoods(true);
    }
  };

  useEffect(() => {
    checkArray();
  });

  return (
    <div>
      {
        renderDrinks && arrFilterDrinks.map((drink, index) => (
          <section
            key={ drink.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <span data-testid={ `${index}-card-name` }>{drink.strDrink}</span>
            <img
              alt={ drink.strDrink }
              src={ drink.strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
          </section>
        ))
      }
      {
        renderFoods && arrFilterFoods.map((food, index) => (
          <section
            key={ food.idMeal }
            data-testid={ `${index}-recipe-card` }
          >
            <span data-testid={ `${index}-card-name` }>
              {food.strMeal}
            </span>
            <img
              alt={ food.strMeal }
              src={ food.strMealThumb }
              data-testid={ `${index}-card-img` }
            />
          </section>
        ))
      }
    </div>

  );
}

export default CardsRecipes;
