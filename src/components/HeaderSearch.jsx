import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context';
import funcArrayFilter from '../helpers/arrayFilter';

function HeaderSearch() {
  const [searchInput, setSearchInput] = useState('');
  const { arrFilterRadio, setArrFilterRadio } = useContext(MyContext);
  const [valueFilter, setValueFilter] = useState('');

  const handleClick = async () => {
    const MIN_LENGTH = 1;
    const RADIO = 'First_Letter';
    if (searchInput.length > MIN_LENGTH && valueFilter === RADIO) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const results = await funcArrayFilter(valueFilter, searchInput);
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
          // value={ filterName }
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
          // value={ filterLetter }
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
