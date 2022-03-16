import React, { useState, useEffect } from 'react';
import { FetchResult } from '../../services';

function FotoRecomendation(props) {
  const { path } = props;
  const SIX = 6;
  const [results, setResults] = useState([]);
  const [nameRoute, setNameRoute] = useState([]);
  const srcThumb = `str${nameRoute}Thumb`;

  useEffect(() => {
    async function carrosel() {
      if (path === '/drinks/:idDaReceita') {
        console.log('entrou');
        const { meals } = await FetchResult('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setNameRoute('Meal');
        setResults(meals.slice(0, SIX));
      }
      if (path === '/foods/:idDaReceita') {
        const { drinks } = await FetchResult('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        setNameRoute('Drink');
        setResults(drinks.slice(0, SIX));
      }
    }

    carrosel();
  }, []);
  return (
    <ul>
      {results
        .map((result, index) => (
          <li key={ index } data-testid={ `${index}-recomendation-card` }>
            <img src={ result[srcThumb] } height="100px" width="100px" alt="foto" />
          </li>
        ))}
    </ul>
  );
}

export default FotoRecomendation;
