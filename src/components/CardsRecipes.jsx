import React, { useContext } from 'react';
import MyContext from '../context';

export default function CardsRecipes() {
  const {
    arrFilterFoods,
    setArrFilterFoods,
    arrFilterDrinks,
    setArrFilterDrinks,
  } = useContext(MyContext);

  return (
    <div>oi</div>
  );
}
