import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function RecipieRenderization(props) {
  const { detailsRecipies, nameRoute } = props;
  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;
  // const strYoutebe = `str${nameRoute}`;
  const handleSrcYoutube = (strYoutube) => {
    console.log(strYoutube);
    console.log(strYoutube.split('watch?v='));
  };

  const filter = () => (
    detailsRecipies
      .map((result, index) => (

        <li key={ index }>
          {console.log(result.strYoutube)}
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
              width="360"
              height="215"
              src={ handleSrcYoutube(result.strYoutube) }
              title="YouTube video player"
              frameBorder="0"
            />
          )}
        </li>
      ))
  );
    // }

  return (
    <div>
      {filter()}
    </div>
  );
  // if (path === '/drinks/:idDaReceita') {
  //   return (detailsRecipies
  //     .map((result, index) => (
  //       <li key={ index }>
  //         <p>{result.strAlcoholic}</p>
  //         <img
  //           src={ result.strDrinkThumb }
  //           data-testid="recipe-photo"
  //           height="100px"
  //           alt={ result.strDrink }
  //         />
  //         <p>{ result.strCategory }</p>
  //         <p data-testid="recipe-title">{ result.strDrink }</p>
  //         <p>{ result.strAlcoholic}</p>
  //       </li>
  //     ))
  //   );
  // }
}

RecipieRenderization.propTypes = {
  path: PropTypes.string,
  detailsRecipies: PropTypes.node,
}.isRequire;

export default RecipieRenderization;
