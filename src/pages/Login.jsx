import React, { useContext } from 'react';
import MyContext from '../context';

function Login() {
  const { loginEmail, loginPassword, loginDisabled } = useContext(MyContext)

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
              onChange={ this.hadleChange }
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
              onChange={ this.hadleChange }
              value={ loginPassword }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ loginDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
    </div>
    
  );
}

export default Login;
