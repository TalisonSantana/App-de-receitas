import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

function Header(props) {
  const { title, history } = props;
  return (
    <header>
      <Link
        to="profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profile }
          alt="profile-btn"
        />
      </Link>
      <h2 data-testid="page-title">{title}</h2>
      <button
        onClick={ () => history.push('/profile') }
        type="button"
      >
        <img
          data-testid="search-top-btn"
          src={ search }
          alt="search-btn"
        />
      </button>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
