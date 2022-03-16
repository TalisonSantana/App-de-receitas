import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import FotoRecomendation from './FotoRecomendation';

function RecipieRenderization(props) {
  const { detailsRecipies,
    path,
    nameRoute,
    ingredients,
    ingredientMeasure,
    history,
  } = props;
  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;

  // console.log('ingredientMeasure', ingredientMeasure);

  const handleSrcYoutube = (strYoutube) => {
    const srcInitial = strYoutube.split('watch?v=');
    const srcFinal = `${srcInitial[0]}/embed/${srcInitial[1]}`;
    return srcFinal;
  };

  const filter = () => (
    detailsRecipies
      .map((result, index) => (
        <section key={ index }>
          <img
            data-testid="recipe-photo"
            src={ result[srcThumb] }
            height="200px"
            max-width="360px"
            width="100%"
            alt={ result[title] }
          />
          <section className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p data-testid="recipe-title">{ result[title] }</p>
              <section data-testid="recipe-category">
                <span>
                  { result.strCategory }
                </span>
                <p>
                  {result.strAlcoholic}
                </p>
              </section>
            </div>
            <section className="d-flex">
              <button data-testid="share-btn" type="button">
                <img src={ shareIcon } alt="shareIcon" />
              </button>
              <button data-testid="favorite-btn" type="button">
                <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
              </button>
            </section>
          </section>
          <section className="d-flex  flex-row ">
            <section>
              <ul>

                {ingredients.map((ingredient, indexIngredient) => (
                  ingredient
                && (
                  <li
                    style={ { listStyle: 'none' } }
                    data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
                    key={ indexIngredient }
                  >
                    -
                    {' '}
                    { ingredient }
                  </li>
                )
                ))}
              </ul>

            </section>
            <section>
              <ul>

                {ingredientMeasure.map((measure, indexMeasure) => (
                  measure
                && (
                  <li
                    style={ { listStyle: 'none' } }
                    data-testid={ `${indexMeasure}-ingredient-name-and-measure` }
                    key={ indexMeasure }
                  >
                    -
                    {' '}
                    { measure }
                  </li>
                )
                ))}
              </ul>
            </section>
          </section>
          <p
            className="p-3"
            data-testid="instructions"
          >
            Instructions:
            <br />
            { result.strInstructions }
          </p>

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
          <FotoRecomendation
            path={ path }
            nameRoute={ nameRoute }
          />
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="button__startRecipe"
            onClick={ history.push(`${path}/in-progress`) }
          >
            Start Recipe
          </button>
        </section>
      ))
  );

  return (
    <>
      {filter()}
    </>
  );
}

RecipieRenderization.propTypes = {
  path: PropTypes.string,
  detailsRecipies: PropTypes.node,
}.isRequire;

export default RecipieRenderization;
