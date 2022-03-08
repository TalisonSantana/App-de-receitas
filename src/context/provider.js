import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function MyProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState ('');
  const [loginDisable, setLoginDisable] = useState (true);

  const store = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    loginDisable,
    setLoginDisable,
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
