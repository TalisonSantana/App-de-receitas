import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../helpers/arrayFilter';
import RecipieRenderization from './RecipieRenderization';
import MyContext from '../../context';

const copy = require('clipboard-copy');

function Recipes({ match: { path, params: { idDaReceita } }, history }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [ingredients, setIgredients] = useState([]);
  const [nameRoute, setNameRoute] = useState('');
  const [ingredientMeasure, setIngredientMeasure] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  const { setIsContinue } = useContext(MyContext);

  function apiIgredients(params) {
    const result = params.map((value) => {
      const keys = Object.keys(value);
      const myRegex = /strIngredient/gi;
      const filterWithRegex = keys.filter((el) => el.match(myRegex));
      const valores = filterWithRegex.map((el) => value[el]);
      return valores;
    });
    return result;
  }

  function apiMeasure(params) {
    const result = params.map((value) => {
      const keys = Object.keys(value);
      const myRegex = /strMeasure/gi;
      const filterWithRegex = keys.filter((el) => el.match(myRegex));
      const valores = filterWithRegex.map((el) => value[el]);
      return valores;
    });
    return result;
  }

  const getLink = () => {
    if (path.includes('foods')) {
      const FIVE_SECONDS = 5000;
      copy(`http://localhost:3000/foods/${idDaReceita}`);
      setIsCopied(true);
      setTimeout(() => (
        setIsCopied(false)
      ), FIVE_SECONDS);
    } else {
      const FIVE_SECONDS = 5000;
      copy(`http://localhost:3000/drinks/${idDaReceita}`);
      setIsCopied(true);
      setTimeout(() => (
        setIsCopied(false)
      ), FIVE_SECONDS);
    }
  };

  useEffect(() => {
    async function Details() {
      if (path === '/drinks/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setIgredients(...apiIgredients(await api(idDaReceita, 'drinks')));
        setIngredientMeasure(...apiMeasure(await api(idDaReceita, 'drinks')));
        setNameRoute('Drink');
      }
      if (path === '/foods/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setIgredients(...apiIgredients(await api(idDaReceita, 'foods')));
        setIngredientMeasure(...apiMeasure(await api(idDaReceita, 'foods')));

        setNameRoute('Meal');
      }
      if (path === '/drinks/:idDaReceita/in-progress') {
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setIgredients(...apiIgredients(await api(idDaReceita, 'drinks')));
        setIngredientMeasure(...apiMeasure(await api(idDaReceita, 'drinks')));
        setNameRoute('Drink');
      }
      if (path === '/foods/:idDaReceita/in-progress') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setIgredients(...apiIgredients(await api(idDaReceita, 'foods')));
        setIngredientMeasure(...apiMeasure(await api(idDaReceita, 'foods')));

        setNameRoute('Meal');
      }
    }
    Details();
  }, []);

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (getLocal) {
      const { cocktails } = getLocal;
      const { meals } = getLocal;
      if (path === '/foods/:idDaReceita') {
        const idMeals = meals[idDaReceita] && setIsContinue(true);
        return idMeals;
      }

      if (path === '/drinks/:idDaReceita') {
        const idCocktails = cocktails[idDaReceita] && setIsContinue(true);
        return idCocktails;
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
        getLink={ getLink }
        isCopied={ isCopied }
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
