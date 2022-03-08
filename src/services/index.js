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

export default FetchEats;
