import React from 'react';

function ButtonFilter() {
  return (
    <nav>
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All

      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food

      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks

      </button>
    </nav>
  );
}

export default ButtonFilter;
