import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api, igredientsFilter, measure } from './RecipiesDetails';
import RecipieRenderization from './RecipieRenderization';
import FotoRecomendation from './FotoRecomendation';

function Recipes({ match: { path, params: { idDaReceita } } }) {
  const [detailsRecipies, setDetailsRecipies] = useState([]);
  const [igredients, setIgredients] = useState([]);
  const [nameRoute, setNameRoute] = useState('');
  const [igredientMeasure, setIgredientMeasure] = useState('');
  console.log(igredientMeasure);
  useEffect(() => {
    async function Details() {
      if (path === '/drinks/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'drinks'));
        setNameRoute('Drink');
        setIgredients(...igredientsFilter);
        setIgredientMeasure(...measure);
      }
      if (path === '/foods/:idDaReceita') {
        setDetailsRecipies(await api(idDaReceita, 'foods'));
        setNameRoute('Meal');
        setIgredients(...igredientsFilter);
        setIgredientMeasure(...measure);
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
      />
      <div>
        <div>
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
        </div>
        <FotoRecomendation path={ path } nameRoute={ nameRoute } />
        {/* <div>
          {igredientMeasure
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

      </div>
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
