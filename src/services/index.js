const FetchEats = async (url) => {
  const API = url;
  try {
    const results = await (await fetch(API)).json();
    const { meals } = results;
    console.log(meals);
    return meals;
  } catch (error) {
    return error;
  }
};

// FetchEats('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

export default FetchEats;
