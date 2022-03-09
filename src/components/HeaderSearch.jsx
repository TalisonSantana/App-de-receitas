import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MyContext from '../context';
import funcArrayFilterFood, { funcArrayFilterDrink } from '../helpers/arrayFilter';

function HeaderSearch() {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const { arrFilterRadio, setArrFilterRadio } = useContext(MyContext);
  const [valueFilter, setValueFilter] = useState('');

  const handleClick = async () => {
    const MIN_LENGTH = 1;
    const RADIO = 'First_Letter';
    if (searchInput.length > MIN_LENGTH && valueFilter === RADIO) {
      global.alert('Your search must have only 1 (one) character');
    } if (location.pathname.includes('drinks')) {
      const results = await funcArrayFilterDrink(valueFilter, searchInput);
      setArrFilterRadio(results);
    } else {
      const results = await funcArrayFilterFood(valueFilter, searchInput);
      setArrFilterRadio(results);
    }
  };

  useEffect(() => {
    console.log(arrFilterRadio);
  }, [arrFilterRadio]);

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        id="search-input"
        onChange={ ({ target }) => setSearchInput(target.value) }
        placeholder="Search Recipe"
      />
      <label htmlFor="ingredient">
        <input
          onChange={ () => setValueFilter('Ingredient') }
          name="filter"
          data-testid="ingredient-search-radio"
          type="radio"
          id="ingredient"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          onChange={ () => setValueFilter('Name') }
          name="filter"
          data-testid="name-search-radio"
          type="radio"
          id="name"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          onChange={ () => setValueFilter('First_Letter') }
          name="filter"
          data-testid="first-letter-search-radio"
          type="radio"
          id="first-letter"
        />
        First Letter
      </label>
      <button
        onClick={ handleClick }
        data-testid="exec-search-btn"
        type="button"
      >
        Search

      </button>
    </form>
  );
}

export default HeaderSearch;
