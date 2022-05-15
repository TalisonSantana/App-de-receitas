import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function IngredientsCheckbox({
  ingredients,
  routeInprogress,
  idDaReceita,
  path,
  ingredientMeasure,
}) {
  const [finishedPlate, setFinishedPlate] = useState([]);
  const routeFoods = '/foods/:idDaReceita/in-progress';
  const routeDrinks = '/drinks/:idDaReceita/in-progress';

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const { meals } = getLocal;
      const { cocktails } = getLocal;
      if (path === routeFoods) {
        setFinishedPlate(...meals[idDaReceita]);
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
            },
            meals: {
              ...meals,
            },
          },
        ));
      }
      if (path === routeDrinks) {
        setFinishedPlate(...cocktails[idDaReceita]);
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
            },
            meals: {
              ...meals,
            },
          },
        ));
      }
    }
  }, []);

  const handleLocalStorage = (getLocal, target) => {
    if (getLocal === null) {
      if (path === routeFoods) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
            },
            meals: {
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
          },
        ));
      }
      if (path === routeDrinks) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
            meals: {
            },
          },
        ));
      }
    }
  };

  const handleChange = ({ target }) => {
    setFinishedPlate((prevState) => ({ ...prevState, [target.name]: target.checked }));

    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal) {
      const { meals } = getLocal;
      const { cocktails } = getLocal;

      if (path === routeFoods) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
            },
            meals: {
              ...meals,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
          },
        ));
      }
      if (path === routeDrinks) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(
          {
            cocktails: {
              ...cocktails,
              [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
            },
            meals: {
              ...meals,
            },
          },
        ));
      }
    }
    handleLocalStorage(getLocal, target);
  };
  const spaceAndNull = (measure) => measure !== null && measure !== ' ';

  return (
    <section className="flex flex-col p-2">
      <p className="text-2xl">Ingredients</p>
      <section className="flex flex-row bg-zinc-300 rounded-md p-2">
        <section className="flex flex-col w-52 ">
          {ingredients.map((ingredient, indexIngredient) => (
            ingredient
          && (
            <section
              className="flex flex-row itens-center"
              key={ indexIngredient }
            >
              {routeInprogress
         && (
           <label
             className="py-2 my-1"
             htmlFor={ ingredient }
             data-testid={ `${indexIngredient}-ingredient-step` }
           >
             <input
               type="checkbox"
               className="h-4 w-4"
               id={ ingredient }
               checked={ finishedPlate[ingredient] }
               name={ ingredient }
               onChange={ handleChange }
             />
           </label>

         )}
              <p
                className="text-xl py-2 ml-2"
                style={
                  { textDecoration: finishedPlate[ingredient] && 'line-through' }
                }
                data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
              >
                {ingredient}
              </p>
            </section>
          )
          ))}
        </section>
        <section className="flex flex-col items-center w-44">
          {ingredientMeasure.map((measure, indexMeasure) => (
            spaceAndNull(measure)
          && (
            <p
              className="text-xl py-2"
              style={ { listStyle: 'none' } }
              data-testid={ `${indexMeasure}-ingredient-name-and-measure` }
              key={ indexMeasure }
            >
              { measure }
            </p>
          )
          ))}
        </section>
      </section>
    </section>
  );
}

IngredientsCheckbox.propTypes = {
  path: PropTypes.string,
}.isRequire;

export default IngredientsCheckbox;
