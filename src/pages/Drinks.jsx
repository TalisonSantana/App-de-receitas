import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardsRecipes from '../components/CardsRecipes';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import { FetchEats } from '../services';
import MyContext from '../context';
import ButtonCategory from '../components/ButtonCategory';

const POSITION_ELEVEN = 12;
const POSITION_FIVE = 5;

function Drinks() {
  const {
    apiDrinks,
    setApiDrinks,
    categoryDrink,
    setCategoryDrink,
    lastButtonDrink,
    setLastButtonDrink,
  } = useContext(MyContext);

  const apiDrinkFunc = async () => {
    const { drinks } = await FetchEats('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    setApiDrinks(drinks.slice(0, POSITION_ELEVEN));
  };

  useEffect(() => {
    async function Api() {
      const results = await FetchEats('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      setCategoryDrink(results.drinks.slice(0, POSITION_FIVE));
      apiDrinkFunc();
    }
    Api();
  }, []);

  const handleClickButtonAll = async () => apiDrinkFunc();

  const handleClickButton = async ({ target }) => {
    const { name } = target;
    const { drinks } = await FetchEats(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`,
    );

    if (lastButtonDrink !== name) {
      setLastButtonDrink(name);
      if (drinks.length > POSITION_ELEVEN) {
        return setApiDrinks(drinks.slice(0, POSITION_ELEVEN));
      }
      if (drinks.length <= POSITION_ELEVEN) {
        return setApiDrinks(drinks);
      }
    }
    if (lastButtonDrink === name) {
      setLastButtonDrink(name);
      apiDrinkFunc();
    }
  };

  return (
    <main>
      <Header
        title="Drinks"
        searchIcon
      />
      <CardsRecipes />
      <ButtonCategory
        nameCategory="All"
        name="All"
        handleClickButton={ handleClickButtonAll }
      />
      <div>
        {categoryDrink && categoryDrink
          .map((nameCategory, index) => (
            <div key={ index }>
              <ButtonCategory
                nameCategory={ nameCategory.strCategory }
                handleClickButton={ handleClickButton }
              >
                { nameCategory.strCategory }
              </ButtonCategory>
            </div>
          ))}
      </div>
      <ul>
        {apiDrinks && apiDrinks
          .map((drink, index) => (
            <Link
              data-testid={ `${index}-recipe-card` }
              to={ `/drinks/${drink.idDrink}` }
              key={ index }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                height="50px"
                alt={ drink.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
            </Link>
          ))}
      </ul>
      <Footer />
    </main>
  );
}

export default Drinks;

// function Drinks() {
//   return (
//     <main>
//       <Header
//         title="Drinks"
//         searchIcon
//       />
//       <CardsRecipes />
//       <Footer />
//     </main>
//   );
// }

// export default Drinks;
