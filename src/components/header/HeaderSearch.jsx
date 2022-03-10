import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MyContext from '../../context';
import funcArrayFilterFood, { funcArrayFilterDrink } from '../../helpers/arrayFilter';

function HeaderSearch() {
  const location = useLocation();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const {
    arrFilterFoods,
    setArrFilterFoods,
    arrFilterDrinks,
    setArrFilterDrinks } = useContext(MyContext);
  const [valueFilter, setValueFilter] = useState('');

  const teste = (fetch, setArray) => {
    if (fetch === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else {
      setArray(fetch);
    }
  };

  const checkFetch = async () => {
    if (location.pathname.includes('drinks')) {
      const { drinks } = await funcArrayFilterDrink(valueFilter, searchInput);
      teste(drinks, setArrFilterDrinks);
    } else {
      const { meals } = await funcArrayFilterFood(valueFilter, searchInput);
      teste(meals, setArrFilterFoods);
    }
  };

  const checkResponse = async () => {
    const MIN_LENGTH = 1;
    if (arrFilterDrinks.length === MIN_LENGTH) {
      history.push(`/drinks/${arrFilterDrinks[0].idDrink}`);
    } if (arrFilterFoods.length === MIN_LENGTH) {
      history.push(`/foods/${arrFilterFoods[0].idMeal}`);
    }
  };

  const handleClick = async () => {
    const MIN_LENGTH = 1;
    const RADIO = 'First_Letter';
    if (searchInput.length > MIN_LENGTH && valueFilter === RADIO) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    checkFetch();
  };

  useEffect(() => {
    checkResponse();
  });

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
