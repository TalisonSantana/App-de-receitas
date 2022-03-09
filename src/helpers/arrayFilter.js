import {
  API_INGREDIENT_DRINK,
  API_INGREDIENT_FOOD,
  API_LETTER_DRINK,
  API_LETTER_FOOD,
  API_NAME_DRINK,
  API_NAME_FOOD,
  FetchRadioFilter,
} from '../services';

const funcArrayFilterFood = (valueFilter, searchInput) => {
  switch (valueFilter) {
  case 'Ingredient':
    return FetchRadioFilter(API_INGREDIENT_FOOD, searchInput);
  case 'Name':
    return FetchRadioFilter(API_NAME_FOOD, searchInput);
  case 'First_Letter':
    return FetchRadioFilter(API_LETTER_FOOD, searchInput);
  default:
    break;
  }
};

export const funcArrayFilterDrink = (valueFilter, searchInput) => {
  switch (valueFilter) {
  case 'Ingredient':
    return FetchRadioFilter(API_INGREDIENT_DRINK, searchInput);
  case 'Name':
    return FetchRadioFilter(API_NAME_DRINK, searchInput);
  case 'First_Letter':
    return FetchRadioFilter(API_LETTER_DRINK, searchInput);
  default:
    break;
  }
};

export default funcArrayFilterFood;
