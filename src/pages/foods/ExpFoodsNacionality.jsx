import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  API_NAME_FOOD,
  API_NATIONALITY_FOOD,
  API_NATIONALITY_RECIPE,
  FetchRadioFilter,
  FetchResult,
} from '../../services';

function ExpFoodsNationalities() {
  const [arrNationality, setArrNationality] = useState([]);
  const [arrRecipes, setArrRecipes] = useState([]);
  const [valueOption, setvalueOption] = useState('All');
  const POSITION_ELEVEN = 12;

  const getNationality = async () => {
    const { meals } = await FetchResult(API_NATIONALITY_FOOD);
    setArrNationality(meals);
  };

  const getRecipes = async () => {
    if (valueOption === 'All') {
      const { meals } = await FetchResult(API_NAME_FOOD);
      setArrRecipes(meals.slice(0, POSITION_ELEVEN));
    } else {
      const { meals } = await FetchRadioFilter(API_NATIONALITY_RECIPE, valueOption);
      setArrRecipes(meals.slice(0, POSITION_ELEVEN));
    }
  };

  useEffect(() => {
    getNationality();
  }, []);

  useEffect(() => {
    getRecipes();
    // setArrRecipes(arrRecipes.slice(0, POSITION_ELEVEN));
  }, [valueOption]);

  return (

    <>
      <Header
        title="Explore Nationalities"
        searchIcon
      />
      <select
        // value={ valueOption }
        onChange={ ({ target }) => setvalueOption(target.value) }
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-option">All</option>
        {
          arrNationality && arrNationality.map((area) => (

            <option
              value={ area.strArea }
              data-testid={ `${area.strArea}-option` }
              key={ area.strArea }
            >
              {area.strArea}

            </option>
          ))

        }
      </select>
      <hr />
      {
        arrRecipes.length > 0 && arrRecipes.map((recipe, index) => (
          <Link
            data-testid={ `${index}-recipe-card` }
            to={ `/foods/${recipe.idMeal}` }
            key={ recipe.idMeal }
          >

            <img
              data-testid={ `${index}-card-img` }
              src={ recipe.strMealThumb }
              height="100px"
              alt={ recipe.strMeal }
            />
            <p data-testid={ `${index}-card-name` }>{ recipe.strMeal }</p>
          </Link>

        ))
      }

      <Footer />
    </>
  );
}

export default ExpFoodsNationalities;
