import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import FotoRecomendation from './FotoRecomendation';
import IngredientsCheckbox from '../../components/IngredientsCheckbox';
import MyContext from '../../context';
import { setLocalStorageOn, setLocalStorageNull } from './saveLocalFavorite';

const copy = require('clipboard-copy');

function RecipieRenderization(props) {
  const {
    detailsRecipies,
    path,
    nameRoute,
    ingredients,
    ingredientMeasure,
    history,
    idDaReceita,
    url,
  } = props;

  const [buttonFinish, setButtonFinish] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iconWhite, setIconWhite] = useState(true);
  const {
    routeInprogress,
    setRouteInprogress,
    isContinue,
  } = useContext(MyContext);

  const srcThumb = `str${nameRoute}Thumb`;
  const id = `id${nameRoute}`;
  const title = `str${nameRoute}`;
  const routeFoods = '/foods/:idDaReceita/in-progress';
  const routeDrinks = '/drinks/:idDaReceita/in-progress';
  const pathSplit = path.split(':idDaReceita');
  const startRecipe = `${pathSplit[0]}${idDaReceita}/in-progress`;

  const handleSrcYoutube = (strYoutube) => {
    const srcInitial = strYoutube.split('watch?v=');
    const srcFinal = `${srcInitial[0]}/embed/${srcInitial[1]}`;
    return srcFinal;
  };

  useEffect(() => {
    if (path === routeFoods) {
      setRouteInprogress(true);
    }
    if (path === routeDrinks) {
      setRouteInprogress(true);
    }
  }, []);

  const handleClick = () => {
    setRouteInprogress(true);
    setButtonFinish(true);
    history.push(startRecipe);
  };

  useEffect(() => {
    if (path === routeFoods) {
      setButtonFinish(true);
    }
    if (path === routeDrinks) {
      setButtonFinish(true);
    }
  }, []);
  const details = detailsRecipies[0];

  const routeFoodsFull = '/foods/:idDaReceita'
  || path === routeFoods;
  const routeDrinksFull = '/drinks/:idDaReceita'
  || path === routeDrinks;
  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getLocal && routeFoodsFull) {
      if (getLocal.some((item) => item[id])) return setIconWhite(false);
      return setIconWhite(true);
    }
    if (getLocal && routeDrinksFull) {
      if (getLocal.some((item) => item[id])) return setIconWhite(false);
      return setIconWhite(true);
    }
  }, []);

  const handleClickIcon = () => {
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setLocalStorageOn(getLocal, path, details, nameRoute);
    setLocalStorageNull(getLocal, path, details, nameRoute);
    if (iconWhite) return setIconWhite(false);
    return setIconWhite(true);
  };
  const getLink = () => {
    const FIVE_SECONDS = 5000;
    copy(`http://localhost:3000${url}`);
    setIsCopied(true);
    setTimeout(() => (
      setIsCopied(false)
    ), FIVE_SECONDS);
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
              <button
                data-testid="share-btn"
                type="button"
                onClick={ getLink }
              >
                <img src={ shareIcon } alt="shareIcon" />
              </button>
              <button
                data-testid="favorite-btn"
                onClick={ handleClickIcon }
                type="button"
              >
                <img
                  src={ iconWhite ? whiteHeartIcon : blackHeartIcon }
                  alt={ iconWhite ? 'whiteHeartIcon' : 'blackHeartIcon' }
                />
              </button>
              {
                isCopied && <span>Link copied!</span>
              }
            </section>
          </section>
          <IngredientsCheckbox
            idDaReceita={ idDaReceita }
            ingredients={ ingredients }
            path={ path }
            routeInprogress={ routeInprogress }
            ingredientMeasure={ ingredientMeasure }
          />
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
          <div>
            {buttonFinish
              ? (
                <button
                  type="button"
                  data-testid="finish-recipe-btn"
                  className="button__startRecipe"
                >
                  Finish Recipe
                </button>
              ) : (
                <button
                  type="button"
                  data-testid="start-recipe-btn"
                  className="button__startRecipe"
                  onClick={ handleClick }
                >
                  { isContinue ? 'Continue Recipe' : ' Start Recipe'}
                </button>
              )}

          </div>
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
