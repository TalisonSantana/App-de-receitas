import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './index';

function MyProvider({ children }) {
  const [arrFilterFoods, setArrFilterFoods] = useState([]);
  const [arrFilterDrinks, setArrFilterDrinks] = useState([]);
  const [apiDrinks, setApiDrinks] = useState([]);
  const [apiDrinksStatic, setApiDrinkStatic] = useState([]);
  const [apiFood, setApiFood] = useState([]);
  const [apiFoodStatic, setApiFoodStatic] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [lastButtonDrink, setLastButtonDrink] = useState('');
  const [lastButtonFood, setLastButtonFood] = useState('');

  const store = {
    arrFilterFoods,
    setArrFilterFoods,
    arrFilterDrinks,
    setArrFilterDrinks,
    apiFood,
    setApiFood,
    apiDrinks,
    setApiDrinks,
    categoryFood,
    setCategoryFood,
    categoryDrink,
    setCategoryDrink,
    apiFoodStatic,
    setApiFoodStatic,
    apiDrinksStatic,
    setApiDrinkStatic,
    lastButtonDrink,
    setLastButtonDrink,
    lastButtonFood,
    setLastButtonFood,
  };

  return (
    <MyContext.Provider value={ store }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default MyProvider;

// function MyProvider({ children }) {
//   const [arrFilterFoods, setArrFilterFoods] = useState([]);
//   const [arrFilterDrinks, setArrFilterDrinks] = useState([]);

//   const store = {
//     arrFilterFoods,
//     setArrFilterFoods,
//     arrFilterDrinks,
//     setArrFilterDrinks,
//   };

//   return (
//     <MyContext.Provider value={ store }>
//       {children}
//     </MyContext.Provider>
//   );
// }

// MyProvider.propTypes = {
//   children: PropTypes.objectOf(PropTypes.any),
// }.isRequired;

// export default MyProvider;
