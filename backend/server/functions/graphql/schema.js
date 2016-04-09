import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import TasteType from './types/taste';
import IngredientType from './types/ingredient';
import DrinkType from './types/drink';

import * as api from './api';

const TastesField = {
  type: new GraphQLList(TasteType),
  description: 'All drink tastes',
  resolve: () => {
    return require('./tastes.json');
  },
}

const IngredientsField = {
  type: new GraphQLList(IngredientType),
  description: 'All drink ingredients',
  args: {
    search: { 
      type: GraphQLString,
      description: 'Search string'
    },
  },
  resolve: (source, {search}) => {
    return api.searchAlgolia('ingredients', search).then((data) =>{
      return data;
    });
  },
}

const DrinksField = {
  type: new GraphQLList(DrinkType),
  description: 'All drinks',
  args: {
    ingredients: { 
      type: new GraphQLList(GraphQLString),
      description: 'One or more ingredients the drink must have'
    },
    taste: { 
      type: GraphQLString,
      description: 'Name of taste'
    },
  },
  resolve: (source, {ingredients, taste}) => {
    ingredients = ingredients || [];
    if (taste) {
      return api.searchAlgolia('tastes', taste).then((data) => {
        const tasteId = data[0].id;
        return api.searchAddbByTasteId(tasteId);
      });
    } else {
      if (ingredients.length === 0) return [];
      const promises = ingredients.map((i) => api.searchAlgolia('ingredients', i));

      return Promise.all(promises).then((data) => {
        const ingredientIds  = data.map((results) => results[0].id);
        return api.searchAddbByIngredientIds(ingredientIds);
      });
    }
  },
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      tastes: TastesField,
      ingredients: IngredientsField,
      drinks: DrinksField,
    })
  })
});
