import React, { useContext, useEffect } from 'react';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Header from '../../components/header/Header';
import CardRecipe from '../../components/recipes/CardRecipe';
import MyContext from '../../context';

function FavoriteRecipes() {
  const { favoriteLocal, setFavoriteLocal } = useContext(MyContext);
  useEffect(() => {
    setFavoriteLocal(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);
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

  const renderFilter = favoriteLocal || favoriteRecipes;

  return (
    <>
      <Header title="Favorite Recipes" />
      <ButtonFilter />
      {
        renderFilter && renderFilter.map((recipe, index) => (
          <CardRecipe
            array={ favoriteLocal }
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
