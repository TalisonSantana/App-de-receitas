export const API_INGREDIENT_FOOD = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const API_NAME_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const API_LETTER_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
export const API_INGREDIENT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
export const API_NAME_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const API_LETTER_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const FetchEats = async (url) => {
  const API = url;
  try {
    const response = await (await fetch(API)).json();
    const { meals } = response;
    console.log('fetchEats', response);
    return meals;
  } catch (error) {
    return error;
  }
};

export const FetchDrinks = async (url) => {
  const API = url;
  try {
    const results = await (await fetch(API)).json();
    const { drinks } = results;
    console.log(drinks);
    return drinks;
  } catch (error) {
    return error;
  }
};

export const FetchRadioFilter = async (endPoint, searchInput) => {
  const API = `${endPoint}${searchInput}`;
  try {
    const response = await (await fetch(API)).json();
    return response;
  } catch (error) {
    return error;
  }
};

export default FetchEats;
