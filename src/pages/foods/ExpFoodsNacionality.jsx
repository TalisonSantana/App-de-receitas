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
  }, [valueOption]);

  return (
    <section className="bg-zinc-200">
      <Header
        title="Explore Nationalities"
        searchIcon
      />
      <section className="text-center flex flex-row justify-center py-2">
        <select
          className="text-center text-xl shadow__button bg-green-500
          text-black rounded-md "
          onChange={ ({ target }) => setvalueOption(target.value) }
          data-testid="explore-by-nationality-dropdown"
        >
          <option
            className="bg-zinc-100"
            data-testid="All-option"
          >
            All
          </option>
          {
            arrNationality && arrNationality.map((area) => (
              <option
                className="bg-zinc-100"
                value={ area.strArea }
                data-testid={ `${area.strArea}-option` }
                key={ area.strArea }
              >
                {area.strArea}
              </option>
            ))
          }
        </select>
      </section>
      <hr style={ { margin: '0' } } />
      <section className="flex mb-9 flex-wrap justify-between p-3">
        {
          arrRecipes.length > 0 && arrRecipes.map((recipe, index) => (
            <section
              key={ recipe.idMeal }
              className="flex flex-col justify-center items-center shadow__card
             my-1 h-18 w-40 box-border rounded-md bg-zinc-100"
            >
              <Link
                data-testid={ `${index}-recipe-card` }
                to={ `/foods/${recipe.idMeal}` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strMealThumb }
                  height="100px"
                  alt={ recipe.strMeal }
                />
              </Link>
              <p data-testid={ `${index}-card-name` }>{ recipe.strMeal }</p>
            </section>

          ))
        }
      </section>
      <Footer />
    </section>
  );
}

export default ExpFoodsNationalities;
