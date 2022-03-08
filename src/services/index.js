const FetchEats = async (url) => {
  const API = url;
  try {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

// FetchEats('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

export default FetchEats;
