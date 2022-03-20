import React, { useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MyContext from '../../context';
import funcArrayFilterFood, { funcArrayFilterDrink } from '../../helpers/arrayFilter';

function HeaderSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const {
    setApiDrink,
    setApiFood,
  } = useContext(MyContext);

  const POSITION_ELEVEN = 12;
  const location = useLocation();
  const history = useHistory();

  const checkFetch = async () => {
    const MIN_LENGTH = 1;
    if (location.pathname.includes('drinks')) {
      const { drinks } = await funcArrayFilterDrink(valueFilter, searchInput);
      if (drinks === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return;
      }
      if (drinks.length === MIN_LENGTH) {
        history.push(`/drinks/${drinks[0].idDrink}`);
      } else { setApiDrink(drinks.slice(0, POSITION_ELEVEN)); }
    }
    if (location.pathname.includes('foods')) {
      const { meals } = await funcArrayFilterFood(valueFilter, searchInput);
      if (meals === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return;
      }
      if (meals.length === MIN_LENGTH) {
        history.push(`/foods/${meals[0].idMeal}`);
      } else { setApiFood(meals.slice(0, POSITION_ELEVEN)); }
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

  return (
    <form>
      <section className="flex">
        <section
          style={ { padding: '1px' } }
        >
          <input
            className="rounded-sm"
            data-testid="search-input"
            type="text"
            id="search-input"
            onChange={ ({ target }) => setSearchInput(target.value) }
            placeholder="Search Recipe"
          />
        </section>
        <section
          style={ { padding: '1px' } }
        >
          <button
            className="shadow__button
          bg-zinc-100 text-black rounded-md h-6 w-24"
            onClick={ handleClick }
            data-testid="exec-search-btn"
            type="button"
          >
            Search
          </button>
        </section>
      </section>
      <section
        className="flex justify-start ml-1"
      >
        <label
          className="pr-2"
          style={ { fontSize: '18px', margin: '0', padding: '4px' } }
          htmlFor="ingredient"
        >
          <input
            onChange={ () => setValueFilter('Ingredient') }
            name="filter"
            data-testid="ingredient-search-radio"
            type="radio"
            id="ingredient"
          />
          Ingredient
        </label>
        <label
          className="pr-2"
          style={ { fontSize: '18px', margin: '0', padding: '4px' } }
          htmlFor="name"
        >
          <input
            onChange={ () => setValueFilter('Name') }
            name="filter"
            data-testid="name-search-radio"
            type="radio"
            id="name"
          />
          Name
        </label>
        <label
          className="pr-2"
          style={ { fontSize: '18px', margin: '0', padding: '4px' } }
          htmlFor="first-letter"
        >
          <input
            onChange={ () => setValueFilter('First_Letter') }
            name="filter"
            data-testid="first-letter-search-radio"
            type="radio"
            id="first-letter"
          />
          First Letter
        </label>
      </section>
    </form>
  );
}
export default HeaderSearch;
