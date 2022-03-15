import { FetchRadioFilter, API_MEALS_ID, API_DRINK_ID } from '../../services';

export const igredientsFilter = [];
export const measure = [];

function apiIgredients(params) {
  const result = params.map((value) => {
    const keys = Object.keys(value);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => value[el]);
    return valores;
  });
  return result;
}

function apiMeasure(params) {
  const result = params.map((value) => {
    const keys = Object.keys(value);
    const myRegex = /strMeasure/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => value[el]);
    return valores;
  });
  return result;
}

export async function api(id, namePath) {
  if (namePath === 'drinks') {
    const { drinks } = await FetchRadioFilter(API_DRINK_ID, id);
    igredientsFilter.push(...apiIgredients(drinks));
    measure.push(...apiMeasure(drinks));
    return drinks;
  }
  if (namePath === 'foods') {
    const { meals } = await FetchRadioFilter(API_MEALS_ID, id);
    igredientsFilter.push(...apiIgredients(meals));
    measure.push(...apiMeasure(meals));
    return meals;
  }
}
