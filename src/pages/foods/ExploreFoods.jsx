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
    <section className="bg-zinc-200 h-screen">
      <Header title="Explore Foods" />
      <section className="flex flex-col items-center p-10">
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
          text-black rounded-md h-12 w-80 text-2xl"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explore/foods/ingredients') }
            type="button"
          >
            By Ingredient
          </button>
        </section>
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
          text-black rounded-md h-12 w-80 text-2xl"
            data-testid="explore-by-nationality"
            onClick={ () => history.push('/explore/foods/nationalities') }
            type="button"
          >
            By Nationality
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

export default ExploreFoods;
