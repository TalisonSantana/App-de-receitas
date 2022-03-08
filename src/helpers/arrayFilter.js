import { FetchRadioIngredient, FetchRadioLetter, FetchRadioName } from '../services';

const funcArrayFilter = (valueFilter, searchInput) => {
  switch (valueFilter) {
  case 'Ingredient':
    return FetchRadioIngredient(searchInput);
  case 'Name':
    return FetchRadioName(searchInput);
  case 'First_Letter':
    return FetchRadioLetter(searchInput);
  default:
    break;
  }
};

export default funcArrayFilter;
