import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {
  API_NATIONALITY_FOOD,
  API_NATIONALITY_RECIPE,
  FetchRadioFilter,
  FetchResult,
} from '../../services';

function ExpFoodsNationalities() {
  const [arrNationality, setArrNationality] = useState([]);
  const [arrRecipes, setArrRecipes] = useState([]);
  const [valueOption, setvalueOption] = useState('American');
  const POSITION_ELEVEN = 12;

  const getNationality = async () => {
    const { meals } = await FetchResult(API_NATIONALITY_FOOD);
    setArrNationality(meals);
  };

  const getRecipes = async () => {
    const { meals } = await FetchRadioFilter(API_NATIONALITY_RECIPE, valueOption);
    setArrRecipes(meals);
    setArrRecipes(meals.slice(0, POSITION_ELEVEN));
  };

  useEffect(() => {
    getNationality();
  }, []);

  useEffect(() => {
    getRecipes();
    // setArrRecipes(arrRecipes.slice(0, POSITION_ELEVEN));
  }, [valueOption]);

  // useEffect(() => setArrRecipes(arrRecipes.slice(0, POSITION_ELEVEN)), [valueOption]);

  return (

    <>
      <Header
        title="Explore Nationalities"
        searchIcon
      />
      <select
        value={ valueOption }
        onChange={ ({ target }) => setvalueOption(target.value) }
        data-testid="explore-by-nationality-dropdown"
      >
        {
          arrNationality && arrNationality.map((area) => (

            <option
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
        arrRecipes && arrRecipes.map((recipe, index) => (
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
