import React, { useEffect, useState } from 'react';
import { FetchResult } from '../../services';
import DrinksIngredients from '../../components/DrinksIngredients';
import '../css/FoodProgress.css';

function DrinkProgress() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);

  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';
      const result = await FetchResult(APIEndPoint);
      const { drinks } = result;
      setDataDrinks(result);
      setDrinksIngredients(drinks);
    }
    api();
  }, []);

  return (
    <div>
      {drinksIngredients.map((drinks, index) => (
        <DrinksIngredients key={ index } drinks={ drinks } dataDrinks={ dataDrinks } />
      ))}
    </div>

  );
}

export default DrinkProgress;
