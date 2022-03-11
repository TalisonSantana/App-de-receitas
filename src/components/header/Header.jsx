import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';

function Header(props) {
  const [searchInput, setSearchInput] = useState(false);
  const { title, searchIcon } = props;

  const onClick = () => {
    if (searchInput) {
      setSearchInput(false);
    } else {
      setSearchInput(true);
    }
  };

  return (
    <header>
      <Link
        to="/profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profile }
          alt="profile-btn"
        />
      </Link>
      <h2 data-testid="page-title">{title}</h2>
      {
        searchIcon
      && (
        <button
          onClick={ onClick }
          type="button"
        >
          <img
            data-testid="search-top-btn"
            src={ search }
            alt="search-btn"
          />
        </button>
      )
      }
      {
        searchInput
        && <HeaderSearch />
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
