import React, { useEffect, useState } from 'react';
// import MyContext from '../context';
import mealIcon from '../images/mealIcon.svg';
import FetchEats from '../services';

function FoodProgress() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const result = await FetchEats(APIEndPoint);
      console.log(result);
      setIngredients(result);
    }
    api();
  }, []);

  console.log(ingredients);
  return (
    <div>
      <img src={ mealIcon } alt="mealIcon" />
      {Object.keys(ingredients)}
    </div>

  );
}

export default FoodProgress;
