import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { API_RANDOM_DRINK, FetchResult } from '../../services';

function ExploreDrinks() {
  const history = useHistory();

  const onClick = async () => {
    const { drinks } = await FetchResult(API_RANDOM_DRINK);
    history.push(`/drinks/${drinks[0].idDrink}`);
  };

  return (
    <>
      <Header title="Explore Drinks" />
      <button
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
        type="button"
      >
        By Ingredient

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

export default ExploreDrinks;
