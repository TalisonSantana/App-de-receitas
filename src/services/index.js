export const FetchEats = async (url) => {
  const API = url;
  try {
    const response = await (await fetch(API)).json();
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const FetchRadioIngredient = async (searchInput) => {
  const API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;
  try {
    const { meals } = await (await fetch(API)).json();
    return meals;
  } catch (error) {
    return error;
  }
};

export const FetchRadioName = async (searchInput) => {
  const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  try {
    const { meals } = await (await fetch(API)).json();
    return meals;
  } catch (error) {
    return error;
  }
};

export const FetchRadioLetter = async (searchInput) => {
  const API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;
  try {
    const { meals } = await (await fetch(API)).json();
    return meals;
  } catch (error) {
    return error;
  }
};
