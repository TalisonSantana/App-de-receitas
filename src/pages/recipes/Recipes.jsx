import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api, igredientsFilter, measure } from './RecipiesDetails';
import RecipieRenderization from './RecipieRenderization';
// import FotoRecomendation from './FotoRecomendation';

function Recipes({ match: { path, params: { idDaReceita } } }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [ingredients, setIgredients] = useState([]);
  const [nameRoute, setNameRoute] = useState('');
  const [ingredientMeasure, setIngredientMeasure] = useState([]);
  console.log('measure', measure);
  console.log(ingredientMeasure);
  useEffect(() => {
    async function Details() {
      if (path === '/drinks/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setNameRoute('Drink');
        setIgredients(...igredientsFilter);
        setIngredientMeasure(...measure);
      }
      if (path === '/foods/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setNameRoute('Meal');
        setIgredients(...igredientsFilter);
        setIngredientMeasure(...measure);
      }
    }
    Details();
  }, []);

  return (
    <main>
      <RecipieRenderization
        path={ path }
        detailsRecipies={ detailsRecipies }
        nameRoute={ nameRoute }
        ingredients={ ingredients }
        ingredientMeasure={ ingredientMeasure }
      />
      {/* <div> */}
      {/* <div>
          {ingredients
            .map((igredient, index) => (
              igredient
            && (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {console.log('Ingredient', igredient)}
                { igredient }
              </li>)
            ))}
        </div> */}
      {/* <FotoRecomendation
        idDaReceita={ idDaReceita }
        path={ path }
        nameRoute={ nameRoute }
      /> */}
      {/* <div>
          {ingredientMeasure
            .map((measures, index) => (
              measures
          && (
            <li
              key={ index }
            >
              { measures }
            </li>)
            ))}
        </div> */}

      {/* </div> */}
    </main>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idDaReceita: PropTypes.number,
    }),
  }),
}.isRequired;

export default Recipes;
