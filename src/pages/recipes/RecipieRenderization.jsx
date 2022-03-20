import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import FotoRecomendation from './FotoRecomendation';
import IngredientsCheckbox from '../../components/IngredientsCheckbox';
import MyContext from '../../context';
import { setLocalStorageOn, setLocalStorageNull } from './saveLocalFavorite';

function RecipieRenderization(props) {
  const {
    detailsRecipies, path, nameRoute, ingredients,
    ingredientMeasure, history, idDaReceita, isCopied, getLink,
  } = props;

  const [buttonFinish, setButtonFinish] = useState(false);
  const [iconWhite, setIconWhite] = useState(true);
  const {
    routeInprogress,
    setRouteInprogress,
    isContinue,
  } = useContext(MyContext);

  const srcThumb = `str${nameRoute}Thumb`;
  // const id = `id${nameRoute}`;
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

  const routeFoodsFull = '/foods/:idDaReceita' || path === routeFoods;
  const routeDrinksFull = '/drinks/:idDaReceita' || path === routeDrinks;

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getLocal && routeFoodsFull) {
      if (getLocal.some((item) => item.id === idDaReceita)) return setIconWhite(false);
      return setIconWhite(true);
    }
    if (getLocal && routeDrinksFull) {
      if (getLocal.some((item) => item.id === idDaReceita)) return setIconWhite(false);
      return setIconWhite(true);
    }
  }, []);

  const handleClickIcon = () => {
    const getLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setLocalStorageNull(getLocal, path, details, nameRoute);
    if (getLocal !== null) {
      const recipeFilter = getLocal.filter((recipe) => (
        recipe.id !== idDaReceita
      ));
      if (iconWhite) {
        setLocalStorageOn(getLocal, path, details, nameRoute, idDaReceita);
        return setIconWhite((prevState) => !prevState);
      }
      if (!iconWhite) {
        localStorage.setItem('favoriteRecipes', JSON.stringify(recipeFilter));
        return setIconWhite((prevState) => !prevState);
      }
    } return setIconWhite((prevState) => !prevState);
  };

  const filter = () => (
    detailsRecipies
      .map((result, index) => (
        <section key={ index } className="bg-zinc-200">
          <section
            className="flex justify-center items-center"
          >
            <img
              data-testid="recipe-photo"
              src={ result[srcThumb] }
              alt={ result[title] }
            />
          </section>
          <section className="flex bg-zinc-100 justify-between p-1 h-auto shadow__card">
            <section
              className="flex flex-col w-44"
            >
              <p
                className="text-2xl"
                style={ { margin: '0' } }
                data-testid="recipe-title"
              >
                { result[title] }
              </p>
              <section data-testid="recipe-category">
                <span className="text-gray-500">
                  { result.strCategory }
                </span>
                <p className="text-gray-500">
                  {result.strAlcoholic}
                </p>
              </section>
            </section>
            <section className="flex items-start justify-between w-24">
              <button
                data-testid="share-btn"
                type="button"
                onClick={ getLink }
              >
                <img width="38px" src={ shareIcon } alt="shareIcon" />
              </button>
              <button
                onClick={ handleClickIcon }
                type="button"
              >
                <img
                  data-testid="favorite-btn"
                  width="38px"
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
          <section className="p-2">
            <p className="text-2xl">
              Instructions
            </p>
            <p
              className="text-xl bg-zinc-300 rounded-md p-2"
              data-testid="instructions"
            >
              { result.strInstructions }
            </p>
          </section>
          <section className="mb-10">
            {!routeInprogress
          && (
            <section>
              {result.strYoutube
          && (
            <section className="p-2">
              <p className="text-2xl">Video</p>
              <iframe
                data-testid="video"
                width="343"
                height="215"
                src={ handleSrcYoutube(result.strYoutube) }
                title="YouTube video player"
              />
            </section>
          )}
              <section className="p-2">
                <p className="text-2xl">Recomended</p>
                <FotoRecomendation
                  path={ path }
                  nameRoute={ nameRoute }
                />
              </section>
            </section>
          )}
          </section>
          <div>
            {buttonFinish
              ? (
                <button
                  type="button"
                  data-testid="finish-recipe-btn"
                  className="shadow__button-inset
                  button__startRecipe bg-green-500 h-12 text-xl"
                  onClick={ () => history.push('/done-recipes') }
                >
                  Finish Recipe
                </button>
              ) : (
                <section>
                  <hr className="w-screen h-4 shadow__header" />
                  <button
                    type="button"
                    data-testid="start-recipe-btn"
                    className="shadow__button-inset
                     button__startRecipe bg-green-500 h-12 text-xl"
                    onClick={ handleClick }
                  >
                    { isContinue ? 'Continue Recipe' : ' Start Recipe'}
                  </button>
                </section>
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
