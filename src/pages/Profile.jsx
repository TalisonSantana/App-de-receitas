import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header/Header';

function Profile({ history }) {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const data = localStorage.getItem('user');
    setEmail(JSON.parse(data).email);
  }, []);

  const handleClick = (path) => {
    if (path === '') {
      localStorage.clear();
    }
    history.push(`/${path}`);
  };
  return (
    <>
      <Header title="Profile" />
      <section>
        <h3 data-testid="profile-email">{`${email}`}</h3>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => handleClick('done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => handleClick('favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => handleClick('') }
        >
          Logout Btn
        </button>
      </section>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
