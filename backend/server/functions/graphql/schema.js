import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import TasteType from './types/taste';

const TastesField = {
  type: new GraphQLList(TasteType),
  description: 'All drink tastes',
  resolve: () => {
    return require('./tastes.json');
  },
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      tastes: TastesField,
    })
  })
});
