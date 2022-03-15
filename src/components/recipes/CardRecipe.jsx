import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favoriteIcon from '../../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function CardRecipe(props) {
  const { alcoholic,
    src,
    name,
    nacionality,
    index,
    category,
    type,
    id } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [isRemove, setIsRemove] = useState(true);

  const getLink = () => {
    const FIVE_SECONDS = 5000;
    copy(`http://localhost:3000/${type}s/${id}`);
    setIsCopied(true);
    setTimeout(() => (
      setIsCopied(false)
    ), FIVE_SECONDS);
  };

  const removeRecipe = () => {
    setIsRemove(false);
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(id);
    if (recipes !== null) {
      const recipeFilter = recipes.filter((recipe) => (
        recipe.id !== id
      ));
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeFilter));
    }
  };

  return (
    <div>
      {
        isRemove
        && (

          <section>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ src }
              alt={ name }
            />
            { !alcoholic
      && (
        <span
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nacionality} - ${category}`}

        </span>
      )}
            <span
              data-testid={ `${index}-horizontal-top-text` }
            >
              {alcoholic}
            </span>

            <h3
              data-testid={ `${index}-horizontal-name` }
            >
              {name}

            </h3>
            <button
              onClick={ getLink }
              type="button"
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="share icon"
              />
            </button>
            <button
              onClick={ removeRecipe }
              type="button"
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ favoriteIcon }
                alt="favorite icon"
              />
            </button>
            {
              isCopied && <span>Link copied!</span>
            }
          </section>
        )
      }
    </div>
  );
}

CardRecipe.propTypes = {
  alcoholic: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  nacionality: PropTypes.string,
}.isRequire;

export default CardRecipe;
