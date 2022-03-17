// import { FetchRadioFilter, API_MEALS_ID, API_DRINK_ID } from '../../services';

// export const igredientsFilter = [];
// export const measure = [];

// function apiIgredients(params) {
//   const result = params.map((value) => {
//     const keys = Object.keys(value);
//     const myRegex = /strIngredient/gi;
//     const filterWithRegex = keys.filter((el) => el.match(myRegex));
//     const valores = filterWithRegex.map((el) => value[el]);
//     console.log(valores);
//     return valores;
//   });
//   return result;
// }

// function apiMeasure(params) {
//   const result = params.map((value) => {
//     const keys = Object.keys(value);
//     const myRegex = /strMeasure/gi;
//     const filterWithRegex = keys.filter((el) => el.match(myRegex));
//     const valores = filterWithRegex.map((el) => value[el]);
//     return valores;
//   });
//   return result;
// }

// export async function api(id, namePath) {
//   if (namePath === 'drinks') {
//     const { drinks } = await FetchRadioFilter(API_DRINK_ID, id);
//     // igredientsFilter.push(...apiIgredients(drinks));
//     // measure.push(...apiMeasure(drinks));
//     return drinks;
//   }
//   if (namePath === 'foods') {
//     const { meals } = await FetchRadioFilter(API_MEALS_ID, id);
//     // igredientsFilter.push(...apiIgredients(meals));
//     // measure.push(...apiMeasure(meals));
//     return meals;
//   }
// }

// export async function carrosel(params) {
//   if (params === 'Drink') {
//     const { meals } = await FetchResult('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//     const src = meals.slice(0, SIX);

//     const fotos = src.map((foto) => foto.strMealThumb);
//     return fotos;
//   }
//   if (params === 'Meal') {
//     const { drink } = await FetchResult('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
//     return drink.slice(0, SIX);
//   }
// }
