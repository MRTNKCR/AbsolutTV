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
    ingredient: { 
      type: GraphQLString,
      description: 'Name of ingredient'
    },
  },
  resolve: (source, {ingredient}) => {
    return api.searchAlgolia('ingredients', ingredient).then((data) => {
      const ingredientId = data[0].id;
      return api.searchAddbByIngredient(ingredientId);
    }).then((data) => {
      return data;
    });
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
