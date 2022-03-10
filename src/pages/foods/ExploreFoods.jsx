import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { API_RANDOM_FOOD, FetchResult } from '../../services';

function ExploreFoods() {
  const history = useHistory();

  const onClick = async () => {
    const { meals } = await FetchResult(API_RANDOM_FOOD);
    history.push(`/foods/${meals[0].idMeal}`);
  };

  return (
    <>
      <Header title="Explore Foods" />
      <button
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
        type="button"
      >
        By Ingredient

      </button>
      <button
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
        type="button"
      >
        By Nationality

      </button>
      <button
        data-testid="explore-surprise"
        onClick={ onClick }
        type="button"
      >
        Surprise me!

      </button>
      <Footer />
    </>
  );
}

export default ExploreFoods;
