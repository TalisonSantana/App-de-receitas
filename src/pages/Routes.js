import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinkProgress from './DrinkProgress';
import DrinkRecipe from './DrinkRecipe';
import Drinks from './Drinks';
import Explore from './Explore';
import ExploreDrinks from './ExploreDrinks';
import ExploreFoods from './ExploreFoods';
import FoodProgress from './FoodProgress';
import FoodRecipe from './FoodRecipe';
import Foods from './Foods';
import Login from './Login';
import ExpFoodsIngredient from './ExpFoodsIngredient';
import ExpDrinksIngredient from './ExpDrinkIngredient';
import ExpFoodsNacionality from './ExpFoodsNacionality';
import Profile from './Profile';
import favoritesRecipes from './favoritesRecipes';
import DoneRecipes from './DoneRecipes';

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
      <Route exact path="/favorite-recipes" component={ favoritesRecipes } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/profile" component={ Profile } />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExpFoodsNacionality }
      />
      <Route exact path="/explore/drinks/ingredients" component={ ExpDrinksIngredient } />
      <Route exact path="/explore/foods/ingredients" component={ ExpFoodsIngredient } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/drinks/idDaReceita/in-progress" component={ DrinkProgress } />
      <Route exact path="/foods/idDaReceita/in-progress" component={ FoodProgress } />
      <Route exact path="/drinks/:idDaReceita" component={ DrinkRecipe } />
      <Route exact path="/foods/:idDaReceita" component={ FoodRecipe } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods" component={ Foods } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
