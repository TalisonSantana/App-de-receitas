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
    <section className="bg-zinc-200 h-screen">
      <Header title="Explore Drinks" />
      <section className="flex flex-col items-center p-10">
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
             text-black rounded-md h-12 w-80 text-2xl"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explore/drinks/ingredients') }
            type="button"
          >
            By Ingredient
          </button>
        </section>
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
             text-black rounded-md h-12 w-80 text-2xl"
            data-testid="explore-surprise"
            onClick={ onClick }
            type="button"
          >
            Surprise me!
          </button>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default ExploreDrinks;
