import React, { useEffect, useState } from 'react';
import { FetchResult } from '../../services';
// import FoodsIngredients from '../../components/FoodsIngredients';
import '../css/FoodProgress.css';

function FoodProgress() {
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  // const [dataMeals, setDataMeals] = useState([]);

  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const result = await FetchResult(APIEndPoint);
      const { meals } = await result;
      // console.log('results', result);
      // console.log('meals', meals);
      setDataMeals(result);
      setFoodsIngredients(meals);
    }
    api();
  }, []);
  console.log('foodsIngredients', foodsIngredients);
  return (
    <div>
      {/* {foodsIngredients.map((meals, index) => (
        <FoodsIngredients key={ index } meals={ meals } dataMeals={ dataMeals } />
      ))} */}

    </div>

  );
}

export default FoodProgress;
