import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { FetchResult } from '../../services';
import MyContext from '../../context';
import ButtonCategory from '../../components/buttons/ButtonCategory';

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
    const { meals } = await FetchResult('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    setApiFood(meals.slice(0, POSITION_ELEVEN));
  };

  const Api = async () => {
    const results = await FetchResult('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    setCategoryFood(results.meals.slice(0, POSITION_FIVE));
    apiFoodFunc();
  };

  useEffect(() => {
    if (apiFood.length === 0) Api();
  }, []);

  const handleClickButtonAll = () => apiFoodFunc();
  const handleClickButton = async ({ target }) => {
    const { name } = target;
    const { meals } = await FetchResult(
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
    <main className="bg-zinc-200">
      <Header
        title="Foods"
        searchIcon
      />
      <section className="flex p-1 my-2">
        <div className="flex flex-wrap justify-between gap-2">
          <ButtonCategory
            name="All"
            nameCategory="All"
            handleClickButton={ handleClickButtonAll }
          />
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
      </section>
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
