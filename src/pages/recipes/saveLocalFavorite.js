const routeFoods = '/foods/:idDaReceita/in-progress';
const routeDrinks = '/drinks/:idDaReceita/in-progress';

export const setLocalStorageNull = (getLocal, path, details, nameRoute) => {
  const id = `id${nameRoute}`;
  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;
  if (getLocal === null) {
    if (path === '/foods/:idDaReceita'
    || path === routeFoods) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [
          {
            id: details[id],
            type: 'food',
            nationality: details.strArea,
            category: details.strCategory,
            alcoholicOrNot: '',
            name: details[title],
            image: details[srcThumb],
          },
        ],
      ));
    }
    if (path === '/drinks/:idDaReceita'
    || path === routeDrinks) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [
          {
            id: details[id],
            type: 'drink',
            nationality: '',
            category: details.strCategory,
            alcoholicOrNot: details.strAlcoholic,
            name: details[title],
            image: details[srcThumb],
          },
        ],
      ));
    }
  }
};

export const setLocalStorageOn = (getLocal, path, details, nameRoute) => {
  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;
  const id = `id${nameRoute}`;
  if (getLocal) {
    if (path === '/foods/:idDaReceita'
    || path === routeFoods) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [
          ...getLocal,
          {
            id: details[id],
            type: 'food',
            nationality: details.strArea,
            category: details.strCategory,
            alcoholicOrNot: '',
            name: details[title],
            image: details[srcThumb],
          },
        ],
      ));
    }
    if (path === '/drinks/:idDaReceita'
    || path === routeDrinks) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [
          ...getLocal,
          {
            id: details[id],
            type: 'drink',
            nationality: details.strArea,
            category: details.strCategory,
            alcoholicOrNot: details.strAlcoholic,
            name: details[title],
            image: details[srcThumb],
          },
        ],
      ));
    }
  }
};
