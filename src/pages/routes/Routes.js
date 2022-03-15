import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinkProgress from '../drinks/DrinkProgress';
// import DrinkRecipe from '../drinks/DrinkRecipe';
import Drinks from '../drinks/Drinks';
import Explore from '../explorer/Explore';
import ExploreDrinks from '../drinks/ExploreDrinks';
import ExploreFoods from '../foods/ExploreFoods';
import FoodProgress from '../foods/FoodProgress';
// import FoodRecipe from '../recipes/Recipes';
import Foods from '../foods/Foods';
import Login from '../user/Login';
import ExpFoodsIngredient from '../foods/ExpFoodIngredient';
import ExpDrinksIngredient from '../drinks/ExpDrinkIngredient';
import Profile from '../user/Profile';
import DoneRecipes from '../recipes/DoneRecipes';
import ExpFoodsNationalities from '../foods/ExpFoodsNacionality';
import FavoriteRecipes from '../recipes/FavoritesRecipes';
import Recipes from '../recipes/Recipes';

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
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/profile" component={ Profile } />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExpFoodsNationalities }
      />
      <Route exact path="/explore/drinks/ingredients" component={ ExpDrinksIngredient } />
      <Route exact path="/explore/foods/ingredients" component={ ExpFoodsIngredient } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/drinks/idDaReceita/in-progress" component={ DrinkProgress } />
      <Route exact path="/foods/idDaReceita/in-progress" component={ FoodProgress } />
      <Route
        exact
        path="/drinks/:idDaReceita"
        render={ (prevProps) => (
          <Recipes { ...prevProps } />) }
      />
      <Route
        exact
        path="/foods/:idDaReceita"
        render={ (prevProps) => (
          <Recipes { ...prevProps } />) }
      />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods" component={ Foods } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
