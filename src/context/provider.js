import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function MyProvider({ children }) {
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

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default MyProvider;
