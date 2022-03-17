import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from '../drinks/Drinks';
import Explore from '../explorer/Explore';
import ExploreDrinks from '../drinks/ExploreDrinks';
import ExploreFoods from '../foods/ExploreFoods';
import Foods from '../foods/Foods';
import Login from '../user/Login';
import ExpFoodsIngredient from '../foods/ExpFoodIngredient';
import ExpDrinksIngredient from '../drinks/ExpDrinkIngredient';
import Profile from '../user/Profile';
import DoneRecipes from '../recipes/DoneRecipes';
import ExpFoodsNationalities from '../foods/ExpFoodsNacionality';
import FavoriteRecipes from '../recipes/FavoriteRecipes';
import Recipes from '../recipes/Recipes';
import NotFound from '../404/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
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
      <Route
        exact
        path="/drinks/:idDaReceita/in-progress"
        render={ (prevProps) => (
          <Recipes { ...prevProps } />
        ) }
      />
      <Route
        exact
        path="/foods/:idDaReceita/in-progress"
        render={ (prevProps) => (
          <Recipes { ...prevProps } />) }
      />
      <Route
        exact
        path="/drinks/:idDaReceita"
        render={ (prevProps) => (
          <Recipes { ...prevProps } />
        ) }
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
