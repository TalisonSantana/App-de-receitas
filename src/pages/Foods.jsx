import React from 'react';
import CardsRecipes from '../components/CardsRecipes';
import Footer from '../components/Footer';
import Header from '../components/header/Header';

function Foods() {
  return (
    <>
      <Header
        title="Foods"
        searchIcon
      />
      <CardsRecipes />
      <Footer />
    </>
  );
}

export default Foods;
