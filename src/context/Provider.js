import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './index';

function MyProvider({ children }) {
  const [arrFilterFoods, setArrFilterFoods] = useState([]);
  const [arrFilterDrinks, setArrFilterDrinks] = useState([]);
  const [apiDrink, setApiDrink] = useState([]);
  const [apiDrinksStatic, setApiDrinkStatic] = useState([]);
  const [apiFood, setApiFood] = useState([]);
  const [apiFoodStatic, setApiFoodStatic] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [lastButtonDrink, setLastButtonDrink] = useState('');
  const [lastButtonFood, setLastButtonFood] = useState('');
  const [routeInprogress, setRouteInprogress] = useState(false);
  const [continueRecipe, setContineRecipe] = useState([]);
  const [favoriteLocal, setFavoriteLocal] = useState([]);
  const [doneLocal, setDoneLocal] = useState([]);
  const [arrNationality, setArrNationality] = useState([]);
  const [isContinue, setIsContinue] = useState(false);

  const store = {
    arrFilterFoods,
    setArrFilterFoods,
    arrFilterDrinks,
    setArrFilterDrinks,
    apiFood,
    setApiFood,
    apiDrink,
    setApiDrink,
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
    routeInprogress,
    setRouteInprogress,
    continueRecipe,
    setContineRecipe,
    favoriteLocal,
    setFavoriteLocal,
    doneLocal,
    setDoneLocal,
    arrNationality,
    setArrNationality,
    isContinue,
    setIsContinue,
  };

  return (
    <MyContext.Provider value={ store }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
