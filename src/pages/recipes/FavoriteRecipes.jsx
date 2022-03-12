import React from 'react';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Header from '../../components/header/Header';
import CardRecipe from '../../components/recipes/CardRecipe';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  return (
    <>
      <Header title="Favorite Recipes" />
      <ButtonFilter />
      {
        favoriteRecipes.map((recipe, index) => (
          <CardRecipe
            array={ favoriteRecipes }
            index={ index }
            key={ recipe.id }
            src={ recipe.image }
            name={ recipe.name }
            category={ recipe.category }
            nacionality={ recipe.nationality }
            alcoholic={ recipe.alcoholicOrNot }
            id={ recipe.id }
            type={ recipe.type }
          />
        ))
      }
    </>
  );
}

export default FavoriteRecipes;
