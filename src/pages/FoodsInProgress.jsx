import React, { useContext } from 'react';
import MyContext from '../context';
import mealIcon from '../images/mealIcon.svg';

function FoodsInProgress() {
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

export default FoodsInProgress;
