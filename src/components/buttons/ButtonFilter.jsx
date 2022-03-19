import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../../context';

function ButtonFilter() {
  const { setFavoriteLocal, setDoneLocal } = useContext(MyContext);
  const location = useLocation();
  const path = location.pathname.includes('/done-recipes');
  let adressPage = null;
  let callback = null;
  if (path) {
    callback = setDoneLocal;
    adressPage = 'doneRecipes';
  } else {
    callback = setFavoriteLocal;
    adressPage = 'favoriteRecipes';
  }

  const filterFavorite = ({ target }, local) => {
    const prevStorage = JSON.parse(localStorage.getItem(local)) || [];
    if (target.name === 'food') {
      callback(prevStorage.filter((food) => food.type === 'food'));
    } else if (target.name === 'drink') {
      callback(prevStorage.filter((drink) => drink.type === 'drink'));
    } else {
      callback(prevStorage);
    }
  };

  return (
    <nav className="p-1 my-1 flex justify-around">
      <button
        className="shadow__button
      bg-green-500 hover:bg-green-700 text-black rounded-md h-7 w-28"
        onClick={ (event) => filterFavorite(event, adressPage) }
        name="all"
        data-testid="filter-by-all-btn"
        type="button"
      >
        All

      </button>
      <button
        className="shadow__button
         bg-green-500 hover:bg-green-700 text-black rounded-md h-7 w-28"
        name="food"
        onClick={ (event) => filterFavorite(event, adressPage) }
        data-testid="filter-by-food-btn"
        type="button"
      >
        Foods

      </button>
      <button
        className="shadow__button
         bg-green-500 hover:bg-green-700 text-black rounded-md h-7 w-28"
        onClick={ (event) => filterFavorite(event, adressPage) }
        name="drink"
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks

      </button>
    </nav>
  );
}

export default ButtonFilter;
