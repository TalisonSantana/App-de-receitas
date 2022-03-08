import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider({ children }) {
  // const [ingredients, setIngredients] = useState([]);

  const store = {

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
