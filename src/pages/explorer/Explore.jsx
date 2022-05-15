import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Explore() {
  const history = useHistory();

  return (
    <section className="bg-zinc-200 h-screen">
      <Header title="Explore" />
      <section className="flex flex-col items-center p-10">
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
              text-black rounded-md h-12 w-80 text-2xl"
            onClick={ () => history.push('/explore/foods') }
            data-testid="explore-foods"
            type="button"
          >
            Explore Foods
          </button>
        </section>
        <section className="p-2">
          <button
            className="shadow__button bg-green-500 hover:bg-green-700
              text-black rounded-md h-12 w-80 text-2xl"
            data-testid="explore-drinks"
            onClick={ () => history.push('/explore/drinks') }
            type="button"
          >
            Explore Drinks
          </button>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Explore;
