import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function MyProvider({ children }) {
  const [arrFilterRadio, setArrFilterRadio] = useState([]);

  const store = {
    arrFilterRadio,
    setArrFilterRadio,
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
