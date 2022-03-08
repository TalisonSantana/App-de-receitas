import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const validadeInputs = () => {
    const PASSWORD_LENGTH = 7;
    const regexEmail = /\w+@+\w+\.com/ig;
    const validateEmail = regexEmail.test(loginEmail);
    const checkPassword = loginPassword.length >= PASSWORD_LENGTH;
    return !(validateEmail && checkPassword);
  };

  const submitBTM = () => {
    const email = { email: loginEmail };

    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(email));
    history.push('/foods');
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="alguem@alguem.com"
            data-testid="email-input"
            onChange={ ({ target }) => setLoginEmail(target.value) }
            value={ loginEmail }
          />
        </label>
        password:
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="6 ou mais caracteres"
            data-testid="password-input"
            onChange={ ({ target }) => setLoginPassword(target.value) }
            value={ loginPassword }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ validadeInputs() }
          onClick={ () => submitBTM() }
        >
          Entrar
        </button>
      </form>
    </div>

  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
