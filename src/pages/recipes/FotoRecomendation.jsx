import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FetchResult } from '../../services';

function FotoRecomendation(props) {
  const { path,

  } = props;
  const [results, setResults] = useState([]);
  const [nameRoute, setNameRoute] = useState([]);
  const SIX = 6;
  const srcThumb = `str${nameRoute}Thumb`;
  const strTitle = `str${nameRoute}`;

  useEffect(() => {
    async function carrosel() {
      if (path === '/drinks/:idDaReceita') {
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
    <section className="flex flex-row">
      {results
        .map((result, index) => (
          <section
            key={ index }
            className="recomendation"
          >
            <Link
              data-testid={ `${index}-recomendation-card` }
              to="foods/52977"
            >
              <img
                src={ result[srcThumb] }
                alt="foto"
              />
            </Link>
            <p data-testid={ `${index}-recomendation-title` }>{result[strTitle]}</p>
          </section>
        ))}
    </section>
  );
}

FotoRecomendation.propTypes = {
  path: PropTypes.string,
}.isRequire;

export default FotoRecomendation;
