import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <>
      <Header title="Explore Drinks" />
      <Header title="Explore Foods" />
      <button
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
        type="button"
      >
        By Ingredient

      </button>
      <button
        data-testid="explore-surprise"
        onClick={ () => history.push('/explore/drinks') }
        type="button"
      >
        Surprise me!

      </button>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
