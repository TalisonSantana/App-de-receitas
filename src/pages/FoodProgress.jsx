import React, { useEffect, useState } from 'react';
import FetchEats from '../services';
import './css/FoodProgress.css';
import Ingredients from '../components/Ingredients';

function FoodProgress() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const result = await FetchEats(APIEndPoint);
      console.log('feee', result);
      setIngredients(result);
    }
    api();
  }, []);

  return (
    <div>
      {ingredients.map((item, index) => (
        <Ingredients key={ index } item={ item } />
      ))}

    </div>

  );
}

export default FoodProgress;
