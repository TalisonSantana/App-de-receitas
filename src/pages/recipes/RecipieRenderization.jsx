import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import FotoRecomendation from './FotoRecomendation';
// import MyContext from '../../context';
import IngredientsCheckbox from '../../components/IngredientsCheckbox';
import MyContext from '../../context';

function RecipieRenderization(props) {
  const { routeInprogress, setRouteInprogress } = useContext(MyContext);

  const {
    detailsRecipies,
    path,
    nameRoute,
    ingredients,
    ingredientMeasure,
    history,
    idDaReceita,
    // routeInprogress,
  } = props;

  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;

  const pathSplit = path.split(':idDaReceita');
  const startRecipe = `${pathSplit[0]}${idDaReceita}/in-progress`;

  const handleSrcYoutube = (strYoutube) => {
    const srcInitial = strYoutube.split('watch?v=');
    const srcFinal = `${srcInitial[0]}/embed/${srcInitial[1]}`;
    return srcFinal;
  };

  // console.log('routeInprogress', routeInprogress);
  console.log('Rendenization', path);

  useEffect(() => {
    if (path === '/foods/:idDaReceita/in-progress') {
      setRouteInprogress(true);
    } else {
      setRouteInprogress(false);
    }
  }, []);

  const handleClick = () => {
    setRouteInprogress(true);
    history.push(startRecipe);
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
            <ul>
              <IngredientsCheckbox
                // ingredient={ ingredient }
                idDaReceita={ idDaReceita }
                // indexIngredient={ indexIngredient }
                ingredients={ ingredients }
                path={ path }
                routeInprogress={ routeInprogress }
              />
              {/* {ingredients.map((ingredient, indexIngredient) => (
                ingredient
                  && (
                    <li key={ indexIngredient }>
                      {routeInprogress
                        ? (
                        )
                        : (
                          <p
                            style={ { listStyle: 'none' } }
                            data-testid={
                              `${indexIngredient}-ingredient-name-and-measure`
                            }
                          >
                            -
                            {' '}
                            { ingredient }
                          </p>)}
                    </li>
                  )
              ))} */}
            </ul>
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
                    {/* -
                    {' '} */}
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
          {!routeInprogress
          && (
            <section>
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
            </section>
          )}
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="button__startRecipe"
            onClick={ handleClick }
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
