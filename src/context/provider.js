import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function MyProvider({ children }) {
  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');
  // const [loginDisabled, setLoginDisabled] = useState(true);

  const store = {
    // loginEmail,
    // setLoginEmail,
    // loginPassword,
    // setLoginPassword,
    // loginDisabled,
    // setLoginDisabled,
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
