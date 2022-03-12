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

  const getLink = () => {
    const EIGHT_SECONDS = 8000;
    copy(`http://localhost:3000/${type}s/${id}`);
    setIsCopied(true);
    setTimeout(() => (
      setIsCopied(false)
    ), EIGHT_SECONDS);
  };

  return (
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
        onClick={ () => localStorage.clear() }
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
  );
}

CardRecipe.propTypes = {
  alcoholic: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  nacionality: PropTypes.string,
}.isRequire;

export default CardRecipe;
