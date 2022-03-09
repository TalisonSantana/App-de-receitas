import React from 'react';
import PropTypes from 'prop-types';

function Ingredients({ item, index }) {
  return (
    <section>
      <div data-testid={ `${index}-ingredient-step` }>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient1}
          </span>
        </section>

        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient2}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient3}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient4}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient5}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient6}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient7}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient8}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient9}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient10}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient11}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient12}
          </span>
        </section>
        <section>
          <input type="checkbox" />
          <span>
            {item.strIngredient13}
          </span>
        </section>
      </div>
    </section>
  );
}

Ingredients.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
}.isRequire;

export default Ingredients;
