import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Profile({ history }) {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user'))
    || { email: 'nao encontrado' });
  }, []);

  const handleClick = (path) => {
    if (path === '') {
      localStorage.clear();
    }
    history.push(`/${path}`);
  };
  return (
    <section
      className="bg-zinc-200 h-screen"
    >
      <Header title="Profile" />
      <section
        className="flex flex-col
    items-center justify-center p-10"
      >
        <h3 className="p-2" data-testid="profile-email">{user.email}</h3>
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
          text-black rounded-md h-12 w-80 text-2xl"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => handleClick('done-recipes') }
          >
            Done Recipes
          </button>
        </section>
        <section className="p-2">
          <button
            className="shadow__button
          bg-green-500 hover:bg-green-700 text-black rounded-md h-12 w-80 text-2xl"
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => handleClick('favorite-recipes') }
          >
            Favorite Recipes
          </button>
        </section>
        <section className="p-2">
          <button
            className="shadow__button
          bg-green-500 hover:bg-green-700 text-black rounded-md h-12 w-80 text-2xl"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => handleClick('') }
          >
            Logout
          </button>
        </section>
      </section>
      <Footer />
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
