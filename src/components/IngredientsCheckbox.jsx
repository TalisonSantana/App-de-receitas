import React, {
  useContext,
  useEffect,

  useState,
} from 'react';
import MyContext from '../context';

function IngredientsCheckbox({
  ingredients,
  routeInprogress,
  idDaReceita,
  path,
  ingredientMeasure,
}) {
  const { setContineRecipe } = useContext(MyContext);
  const [finishedPlate, setFinishedPlate] = useState([]);

  const routeFoods = '/foods/:idDaReceita/in-progress';
  const routeDrinks = '/drinks/:idDaReceita/in-progress';

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log('getLocal', getLocal);
    if (getLocal) {
      const { cocktails } = getLocal;
      const { meals } = getLocal;
      if (path === routeDrinks) {
        setContineRecipe({ ...Object.keys(cocktails) });
      }
      if (path === routeFoods) {
        setContineRecipe({ ...Object.keys(meals) });
      }
    }
  }, [idDaReceita]);

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

  return (
    // <section className="d-flex flex-column">
    <section className="d-flex flex-row">
      <section className="d-flex flex-column">
        {ingredients.map((ingredient, indexIngredient) => (
          ingredient
            && (
              <section
                className="d-flex flex-row"
                key={ indexIngredient }
              >
                {routeInprogress
         && (
           <label
             htmlFor={ ingredient }
             data-testid={ `${indexIngredient}-ingredient-step` }
           >
             <input
               type="checkbox"
               id={ ingredient }
               checked={ finishedPlate[ingredient] }
               name={ ingredient }
               onChange={ handleChange }
             />
           </label>

         )}
                <div
                  style={
                    { textDecoration: finishedPlate[ingredient] && 'line-through' }
                  }
                  data-testid={ `${indexIngredient}-ingredient-name-and-measure` }
                >
                  {ingredient}
                </div>
              </section>
            )
        ))}
      </section>
      <section>
        {ingredientMeasure.map((measure, indexMeasure) => (
          measure
                && (
                  <div
                    style={ { listStyle: 'none' } }
                    data-testid={ `${indexMeasure}-ingredient-name-and-measure` }
                    key={ indexMeasure }
                  >
                    { measure }
                  </div>
                )
        ))}
      </section>
    </section>
    // </section>
  );
}

IngredientsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsCheckbox;

// const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
// if (getLocal) {
//   const { meals } = getLocal;
//   const { cocktails } = getLocal;
//   if (path === '/foods/:idDaReceita/in-progress') {
//     localStorage.setItem('inProgressRecipes', JSON.stringify(
//       {
//         cocktails: {
//           ...cocktails,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//         meals: {
//           ...meals,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//       },
//     ));
//   }
//   if (path === '/drinks/:idDaReceita/in-progress') {
//     localStorage.setItem('inProgressRecipes', JSON.stringify(
//       {
//         cocktails: {
//           ...cocktails,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//         meals: {
//           ...meals,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//       },
//     ));
//   }
// }

// localStorage.setItem('inProgressRecipes', JSON.stringify(
//   {
//     cocktails: {
//       [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//     },
//     meals: {
//       [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//     },
//   },
// ));
