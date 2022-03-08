const FetchEats = async (url) => {
  const API = url;
  try {
    const { results } = await (await fetch(API)).json();
    console.log(results);
    return results;
  } catch (error) {
    return error;
  }
};

FetchEats('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

export default FetchEats;
