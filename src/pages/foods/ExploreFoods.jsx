import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function ExploreFoods() {
  const history = useHistory();
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
        onClick={ () => history.push('/explore/drinks') }
        type="button"
      >
        Surprise me!

      </button>
      <Footer />
    </>
  );
}

export default ExploreFoods;
