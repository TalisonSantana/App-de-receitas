export const API_INGREDIENT_FOOD = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const API_NAME_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const API_LETTER_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
export const API_INGREDIENT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
export const API_NAME_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const API_LETTER_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
export const API_RANDOM_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
export const API_RANDOM_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const API_MEALS_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
export const API_DRINK_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const API_NATIONALITY_FOOD = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const API_NATIONALITY_RECIPE = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

export const FetchResult = async (url) => {
  const API = url;
  try {
    const response = await (await fetch(API)).json();
    return response;
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
