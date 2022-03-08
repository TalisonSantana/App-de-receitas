import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinksInProgress from './DrinksInProgress';
import FoodsInProgress from './FoodsInProgress';
import Login from './Login';

// Tela de login: /;
// Tela principal de receitas de comidas: /foods;
// Tela principal de receitas de bebidas: /drinks;
// Tela de detalhes de uma receita de comida: /foods/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /drinks/{id-da-receita};
// Tela de receita em progresso de comida: /foods/{id-da-receita}/in-progress;
// Tela de receita em progresso de bebida: /drinks/{id-da-receita}/in-progress;
// Tela de explorar: /explore;
// Tela de explorar comidas: /explore/foods;
// Tela de explorar bebidas: /explore/drinks;
// Tela de explorar comidas por ingrediente: /explore/foods/ingredients;
// Tela de explorar bebidas por ingrediente: /explore/drinks/ingredients;
// Tela de explorar comidas por nacionalidade: /explore/foods/nationalities;
// Tela de perfil: /profile;
// Tela de receitas feitas: /done-recipes;
// Tela de receitas favoritas: /favorite-recipes.

function Routes() {
  return (
    <Switch>
      {/* <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
      {/* <Route exact path="/done-recipes" component={ DoneRecipes } /> */}
      {/* <Route exact path="/profile" component={ Profile } /> */}
      {/* <Route exact path="/explore/foods/nationalities" component={ rgrgrg } /> */}
      {/* <Route exact path="/explore/drinks/ingredients" component={ rgrgrg } /> */}
      {/* <Route exact path="/explore/foods/ingredients" component={ rgrgrg } /> */}
      {/* <Route exact path="/explore/drinks" component={ rgrgrg } /> */}
      {/* <Route exact path="/explore/foods" component={ efcwef } /> */}
      {/* <Route exact path="/explore" component={ Explore } /> */}
      <Route
        exact
        path="/drinks/idDaReceita/in-progress"
        component={ DrinksInProgress }
      />
      <Route
        exact
        path="/foods/idDaReceita/in-progress"
        component={ FoodsInProgress }
      />
      {/* <Route exact path="/drinks/:idDaReceita" component={ Drinks / { receita } } /> */}
      {/* <Route exact path="/foods/:idDaReceita" component={ Foods / { receita } } /> */}
      {/* <Route exact path="/drinks" component={ Drinks } /> */}
      {/* <Route exact path="/foods" component={ Foods } /> */}
      <Route path="/" component={ Login } />
      <div>routes</div>
    </Switch>

  );
}

export default Routes;
