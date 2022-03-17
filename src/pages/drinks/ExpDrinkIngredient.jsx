import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MyContext from '../../context';
import { API_INGREDIENT_DRINK, FetchRadioFilter, FetchResult } from '../../services';

const MAX_CARDS = 12;

function ExpDrinksIngredient() {
  const history = useHistory();
  const [ingredients, setIngredients] = useState([]);
  const { setApiDrink } = useContext(MyContext);

  const getIngredients = async () => {
    const data = await FetchResult('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const dataAtt = data.drinks.slice(0, MAX_CARDS);
    setIngredients(dataAtt);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const fetchIngredient = async ({ target }) => {
    const { drinks } = await FetchRadioFilter(API_INGREDIENT_DRINK, target.alt);
    const dataAtt = drinks.slice(0, MAX_CARDS);

    setApiDrink(dataAtt);
    history.push('/drinks');
  };

  return (
    <>
      <Header title="Explore Ingredients" />
      {ingredients.length > 0 && ingredients.map((ingredient, index) => (
        // <div>
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          to="/drinks"
          onClick={ (event) => { fetchIngredient(event); } }
        >
          <img
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            alt={ ingredient.strIngredient1 }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
        </button>

        // </div>
      ))}
      <Footer />
    </>
  );
}
//
export default ExpDrinksIngredient;
