import React, { useEffect, useState } from 'react';
import { FetchDrinks } from '../services';
import Ingredients from '../components/Ingredients';
import './css/FoodProgress.css';

function DrinkProgress() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';
      const result = await FetchDrinks(APIEndPoint);
      setDrinksIngredients(result);
    }
    api();
  }, []);
  return (
    <div>
      {drinksIngredients.map((item, index) => (
        <Ingredients key={ index } item={ item } />
      ))}
    </div>

  );
}

export default DrinkProgress;
