import React, { useContext } from 'react';
import MyContext from '../../context';

function ButtonFilter() {
  const { setFavoriteLocal } = useContext(MyContext);

  const filterFavorite = ({ target }) => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (target.name === 'food') {
      setFavoriteLocal(favoriteStorage.filter((food) => food.type === 'food'));
    } else if (target.name === 'drink') {
      setFavoriteLocal(favoriteStorage.filter((drink) => drink.type === 'drink'));
    } else {
      setFavoriteLocal(favoriteStorage);
    }
  };

  return (
    <nav>
      <button
        onClick={ filterFavorite }
        name="all"
        data-testid="filter-by-all-btn"
        type="button"
      >
        All

      </button>
      <button
        name="food"
        onClick={ filterFavorite }
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food

      </button>
      <button
        onClick={ filterFavorite }
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
