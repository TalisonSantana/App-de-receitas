import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './index';

function Provider({ children }) {
  const [arrFilterFoods, setArrFilterFoods] = useState([]);
  const [arrFilterDrinks, setArrFilterDrinks] = useState([]);

  const store = {
    arrFilterFoods,
    setArrFilterFoods,
    arrFilterDrinks,
    setArrFilterDrinks,
  };

  return (
    <MyContext.Provider value={ store }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default Provider;
