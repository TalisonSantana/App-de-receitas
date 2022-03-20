import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MyContext from '../../context';
import { API_INGREDIENT_FOOD, FetchRadioFilter, FetchResult } from '../../services';

const MAX_CARDS = 12;

function ExpFoodsIngredient() {
  const history = useHistory();
  const [ingredients, setIngredients] = useState([]);
  const { setApiFood } = useContext(MyContext);

  const getIngredients = async () => {
    const data = await FetchResult('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const dataAtt = data.meals.slice(0, MAX_CARDS);
    setIngredients(dataAtt);
  };
  useEffect(() => {
    getIngredients();
  }, []);

  const fetchIngredient = async ({ target }) => {
    const { meals } = await FetchRadioFilter(API_INGREDIENT_FOOD, target.alt);
    const dataAtt = meals.slice(0, MAX_CARDS);
    setApiFood(dataAtt);
    history.push('/foods');
  };

  return (
    <section className="bg-zinc-200 h-sreen">
      <Header title="Explore Ingredients" />
      <section className="flex mb-9 flex-wrap justify-between p-3">
        {ingredients.map((ingredient, index) => (
          <section
            key={ index }
            className="flex flex-col justify-center items-center bg-white-100 shadow__card
            my-1 h-18 w-40 box-border rounded-md bg-zinc-100"
          >
            <button
              data-testid={ `${index}-ingredient-card` }
              type="button"
              onClick={ (event) => { fetchIngredient(event); } }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                alt={ ingredient.strIngredient }
                data-testid={ `${index}-card-img` }
              />
            </button>
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </section>
        ))}
      </section>
      <Footer />
    </section>
  );
}
export default ExpFoodsIngredient;
