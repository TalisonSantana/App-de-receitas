import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { FetchResult } from '../../services';
import MyContext from '../../context';
import ButtonCategory from '../../components/buttons/ButtonCategory';

const POSITION_ELEVEN = 12;
const POSITION_FIVE = 5;
function Drinks() {
  const {
    apiDrink,
    setApiDrink,
    categoryDrink,
    setCategoryDrink,
    lastButtonDrink,
    setLastButtonDrink,
  } = useContext(MyContext);
  const apiDrinkFunc = async () => {
    const { drinks } = await FetchResult('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    setApiDrink(drinks.slice(0, POSITION_ELEVEN));
  };

  const Api = async () => {
    const results = await FetchResult('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    setCategoryDrink(results.drinks.slice(0, POSITION_FIVE));
    apiDrinkFunc();
  };

  useEffect(() => {
    if (apiDrink.length === 0) Api();
  }, []);

  const handleClickButtonAll = async () => apiDrinkFunc();
  const handleClickButton = async ({ target }) => {
    const { name } = target;
    const { drinks } = await FetchResult(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`,
    );
    if (lastButtonDrink !== name) {
      setLastButtonDrink(name);
      if (drinks.length > POSITION_ELEVEN) {
        return setApiDrink(drinks.slice(0, POSITION_ELEVEN));
      }
      if (drinks.length <= POSITION_ELEVEN) {
        return setApiDrink(drinks);
      }
    }
    if (lastButtonDrink === name) {
      setLastButtonDrink(name);
      apiDrinkFunc();
    }
  };

  return (
    <main className="bg-zinc-200">
      <Header
        title="Drinks"
        searchIcon
      />
      <section className="flex p-1 my-1">
        <div className="flex flex-wrap justify-between gap-2">
          <ButtonCategory
            nameCategory="All"
            name="All"
            handleClickButton={ handleClickButtonAll }
          />
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
      </section>
      <ul className="flex mb-9 bg-zinc-100 flex-wrap justify-between p-3">
        {apiDrink && apiDrink
          .map((drink, index) => (
            <Link
              className="bg-white-100 shadow__card
            my-1 h-52 w-40 box-border rounded-md"
              data-testid={ `${index}-recipe-card` }
              to={ `/drinks/${drink.idDrink}` }
              key={ index }
            >
              <img
                className="rounded-md h-40 rounded-b-none"
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
              <p
                className="text-black text-justify text-center text-md break-words mt-1"
                data-testid={ `${index}-card-name` }
              >
                { drink.strDrink }

              </p>
            </Link>
          ))}
      </ul>
      <Footer />
    </main>
  );
}
export default Drinks;
