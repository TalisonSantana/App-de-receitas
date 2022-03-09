import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile({ history }) {
  const getEmailLocalStorage = () => {
    const email = localStorage.getItem('user');
    return JSON.parse(email).email;
  };
  const handleClick = (path) => {
    if (path === '') {
      localStorage.clear();
    }
    history.push(`/${path}`);
  };
  const email = getEmailLocalStorage();
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
