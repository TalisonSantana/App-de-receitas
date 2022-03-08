import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import mealIcon from '../images/mealIcon.svg';

function FoodProgress() {
  const { ingredients } = useContext(MyContext);
  console.log(ingredients);
  return (
    <div>
      <img src={ mealIcon } alt="mealIcon" />
      {ingredients.map((el, index) => (
        <p key={ index }>{el}</p>
      )) }
    </div>

  );
}

export default FoodProgress;
