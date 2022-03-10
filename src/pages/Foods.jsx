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

function Food() {
  const {
    apiFood,
    setApiFood,
    categoryFood,
    setCategoryFood,
    lastButtonFood,
    setLastButtonFood,
  } = useContext(MyContext);

  const apiFoodFunc = async () => {
    const { meals } = await FetchEats('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    setApiFood(meals.slice(0, POSITION_ELEVEN));
  };

  useEffect(() => {
    async function Api() {
      const results = await FetchEats('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      setCategoryFood(results.meals.slice(0, POSITION_FIVE));
      apiFoodFunc();
    }
    Api();
  }, []);

  const handleClickButtonAll = () => apiFoodFunc();

  const handleClickButton = async ({ target }) => {
    const { name } = target;
    const { meals } = await FetchEats(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`,
    );
    if (lastButtonFood !== name) {
      setLastButtonFood(name);
      if (meals.length > POSITION_ELEVEN) {
        return setApiFood(meals.slice(0, POSITION_ELEVEN));
      }
      if (meals.length <= POSITION_ELEVEN) {
        return setApiFood(meals);
      }
    }
    if (lastButtonFood === name) {
      setLastButtonFood(name);
      apiFoodFunc();
    }
  };

  return (
    <main>
      <Header
        title="Foods"
        searchIcon
      />
      <CardsRecipes />
      <div>
        <ButtonCategory
          name="All"
          nameCategory="All"
          handleClickButton={ handleClickButtonAll }
        />
      </div>
      <div>
        {categoryFood && categoryFood
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
        {apiFood && apiFood
          .map((food, index) => (
            <Link
              data-testid={ `${index}-recipe-card` }
              to={ `/foods/${food.idMeal}` }
              key={ index }
            >
              {' '}
              <img
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                height="100px"
                alt={ food.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
            </Link>
          ))}
      </ul>
      <Footer />
    </main>
  );
}

export default Food;

// function Foods() {
//   return (
//     <>
//       <Header
//         title="Foods"
//         searchIcon
//       />
//       <CardsRecipes />
//       <Footer />
//     </>
//   );
// }

// export default Foods;
