import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FetchEats from '../services';
import MyContext from './MyContext';

function Provider({ children }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function api() {
      const APIEndPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
      const result = await FetchEats(APIEndPoint);
      setIngredients(result);
    }
    api();
  }, []);

  const value = {
    ingredients,
  };

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequire;

export default Provider;
