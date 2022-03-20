import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import favoriteIcon from '../../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function CardRecipe(props) {
  const location = useLocation();
  const { alcoholic,
    tags,
    date,
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
    if (recipes !== null) {
      const recipeFilter = recipes.filter((recipe) => (
        recipe.id !== id
      ));
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeFilter));
    }
  };

  return (
    <div className="flex flex-row bg-zinc-100 shadow__card my-3 rounded-md">
      {
        isRemove
        && (
          <section className="flex justify-around">
            <section>
              <Link
                to={ type === 'drink' ? `/drinks/${id}` : `/foods/${id}` }
              >
                <img
                  className="rounded-l-md"
                  height="143px"
                  width="165px"
                  data-testid={ `${index}-horizontal-image` }
                  src={ src }
                  alt={ name }
                />
              </Link>
            </section>
            <section className="flex flex-col w-auto p-2">
              <section className="flex justify-between">
                { !alcoholic
                  && (
                    <span
                      className="text-gray-500"
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      {`${nacionality} - ${category}`}

                    </span>
                  )}
                <span
                  className="text-gray-500"
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {alcoholic}
                </span>
                {
                  location.pathname.includes('done-recipes')
                  && (
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
                  )
                }
              </section>
              <section>
                <p
                  className="text-md"
                  data-testid={ `${index}-horizontal-name` }
                >
                  <strong>
                    {name}
                  </strong>
                </p>
              </section>
              <section>
                {date
              && (
                <span
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  Done in:
                  {' '}
                  {date}

                </span>
              )}
              </section>
              <section className="flex justify-around">
                {tags
              && (
                tags.map((tag) => (
                  <span
                    className="bg-zinc-300 rounded-md px-2"
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}

                  </span>
                ))

              )}
              </section>
              <section className="w-40">
                {
                  location.pathname.includes('favorite-recipes')
                && (
                  <section className="flex justify-around">
                    <button
                      onClick={ getLink }
                      type="button"
                    >

                      <img
                        width="30px"
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
                        width="31px"
                        data-testid={ `${index}-horizontal-favorite-btn` }
                        src={ favoriteIcon }
                        alt="favorite icon"
                      />
                    </button>
                  </section>
                )
                }
              </section>
              {
                isCopied && <span>Link copied!</span>
              }
            </section>
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
