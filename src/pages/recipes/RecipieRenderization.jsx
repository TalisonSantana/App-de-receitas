import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function RecipieRenderization(props) {
  const { detailsRecipies, nameRoute } = props;
  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;

  const handleSrcYoutube = (strYoutube) => {
    const srcInitial = strYoutube.split('watch?v=');
    const srcFinal = `${srcInitial[0]}/embed/${srcInitial[1]}`;
    return srcFinal;
  };

  const filter = () => (
    detailsRecipies
      .map((result, index) => (

        <li key={ index }>
          <img
            data-testid="recipe-photo"
            src={ result[srcThumb] }
            height="100px"
            alt={ result[title] }
          />
          <p data-testid="recipe-title">{ result[title] }</p>
          <p data-testid="recipe-category">{ result.strCategory }</p>
          <p data-testid="instructions">
            Instructions:
            <br />
            { result.strInstructions }
          </p>
          <button data-testid="share-btn" type="button">
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <button data-testid="favorite-btn" type="button">
            <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
          </button>
          {result.strYoutube
          && (
            <iframe
              data-testid="video"
              width="360"
              height="215"
              src={ handleSrcYoutube(result.strYoutube) }
              title="YouTube video player"
            />
          )}
          <button type="button" data-testid="start-recipe-btn">
            Start Recipe
          </button>
        </li>
      ))
  );

  return (
    <div>
      {filter()}
    </div>
  );
}

RecipieRenderization.propTypes = {
  path: PropTypes.string,
  detailsRecipies: PropTypes.node,
}.isRequire;

export default RecipieRenderization;
