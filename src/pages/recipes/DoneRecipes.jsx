import React, { useContext, useEffect } from 'react';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Header from '../../components/header/Header';
import CardRecipe from '../../components/recipes/CardRecipe';
import MyContext from '../../context';

function DoneRecipes() {
  const { doneLocal, setDoneLocal } = useContext(MyContext);
  useEffect(() => {
    setDoneLocal(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot:  'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  const renderFilter = doneLocal || doneRecipes;
  return (
    <>
      <Header title="Done Recipes" />
      <ButtonFilter />
      {
        renderFilter && renderFilter.map((recipe, index) => (
          <CardRecipe
            array={ doneLocal }
            index={ index }
            key={ recipe.id }
            src={ recipe.image }
            name={ recipe.name }
            date
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

export default DoneRecipes;
