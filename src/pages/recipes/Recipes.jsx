import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api, igredientsFilter, measure } from './RecipiesDetails';
import RecipieRenderization from './RecipieRenderization';
// import FotoRecomendation from './FotoRecomendation';

function Recipes({ match: { path, params: { idDaReceita } }, history }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [ingredients, setIgredients] = useState([]);
  const [nameRoute, setNameRoute] = useState('');
  const [ingredientMeasure, setIngredientMeasure] = useState([]);

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
      if (path === '/drinks/:idDaReceita/in-progress') {
        setRouteInprogress(true);
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setNameRoute('Drink');
        setIgredients(...igredientsFilter);
        setIngredientMeasure(...measure);
      }
      if (path === '/foods/:idDaReceita/in-progress') {
        setRouteInprogress(true);
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
        history={ history }
        idDaReceita={ idDaReceita }
      />
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
