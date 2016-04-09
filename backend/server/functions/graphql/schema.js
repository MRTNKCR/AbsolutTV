import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import TasteType from './types/taste';
import IngredientType from './types/ingredient';

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

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      tastes: TastesField,
      ingredients: IngredientsField,
    })
  })
});
