import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api, igredientsFilter } from './RecipiesDetails';

function Recipes({ match: { path, params: { idDaReceita } } }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [igredients, setIgredients] = useState([]);
  console.log('igreee', igredients);

  useEffect(() => {
    async function Details() {
      if (path === '/drinks/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setIgredients(...igredientsFilter);
      }
      if (path === '/foods/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setIgredients(...igredientsFilter);
      }
    }
    Details();
  }, []);

  const filterRecipes = () => {
    if (path === '/foods/:idDaReceita') {
      return (detailsRecipies
        .map((result, index) => (
          <li key={ index }>
            <img
              data-testid={ `${index}-card-img` }
              src={ result.strMealThumb }
              height="100px"
              alt={ result.strMeal }
            />
            <p data-testid={ `${index}-card-name` }>{ result.strMeal }</p>
          </li>
        ))
      );
    }
    if (path === '/drinks/:idDaReceita') {
      return (detailsRecipies
        .map((result, index) => (
          <li key={ index }>
            <p>{result.strAlcoholic}</p>
            <img
              src={ result.strDrinkThumb }
              data-testid="recipe-photo"
              height="100px"
              alt={ result.strDrink }
            />
            <p>{ result.strCategory }</p>
            <p data-testid="recipe-title">{ result.strDrink }</p>
            <p>{ result.strAlcoholic}</p>
          </li>
        ))
      );
    }
  };
  return (
    <main>
      {filterRecipes()}
      {igredients
        .map((igredient, index) => (
          igredient
          && (
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ index }
            >
              { igredient }
            </li>)
        ))}
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
