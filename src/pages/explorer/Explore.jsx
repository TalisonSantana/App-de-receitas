import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Explore() {
  const history = useHistory();

  return (
    <>
      <Header title="Explore" />
      <button
        onClick={ () => history.push('/explore/foods') }
        data-testid="explore-foods"
        type="button"
      >
        Explore Foods

      </button>
      <button
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
        type="button"
      >
        Explore Drinks

      </button>
      <Footer />
    </>
  );
}

export default Explore;
