import React from 'react';
import CardsRecipes from '../components/CardsRecipes';
import Footer from '../components/Footer';
import Header from '../components/header/Header';

function Drinks() {
  return (
    <main>
      <Header
        title="Drinks"
        searchIcon
      />
      <CardsRecipes />
      <Footer />
    </main>
  );
}

export default Drinks;
