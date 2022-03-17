import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { api, igredientsFilter, measure } from './RecipiesDetails';
import RecipieRenderization from './RecipieRenderization';
import MyContext from '../../context';

function Recipes({ match: { path, params: { idDaReceita } }, history }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [ingredients, setIgredients] = useState([]);
  const [nameRoute, setNameRoute] = useState('');
  const [ingredientMeasure, setIngredientMeasure] = useState([]);

  const { setIsContinue } = useContext(MyContext);

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
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setNameRoute('Drink');
        setIgredients(...igredientsFilter);
        setIngredientMeasure(...measure);
      }
      if (path === '/foods/:idDaReceita/in-progress') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setNameRoute('Meal');
        setIgredients(...igredientsFilter);
        setIngredientMeasure(...measure);
      }
    }
    Details();
  }, []);

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (getLocal) {
      const { cocktails } = getLocal;
      const { meals } = getLocal;

      if (meals[idDaReceita]) {
        console.log('Passou Dinamico Meals');
        console.log(meals[idDaReceita]);
        setIsContinue(true);
      }

      if (cocktails[idDaReceita]) {
        console.log('Passou Dinamico cocktails');
        setIsContinue(true);
      }
    }
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
