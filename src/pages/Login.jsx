import React, { useState } from 'react';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const validadeInputs = () => {
    const PASSWORD_LENGTH = 6;
    const checkEmail = loginEmail.includes('@' && '.com');
    const checkPassword = loginPassword.length >= PASSWORD_LENGTH;
    return !(checkEmail && checkPassword);
  };

  const submitBTM = () => {
    const email = { email: loginEmail };

    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(email));
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

export default Login;
