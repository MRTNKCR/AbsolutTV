import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

const IngredientType = new GraphQLObjectType({
  name: 'Ingredient',
  description: 'Drink ingredient',
  fields: () => ({
    id: { 
      type: GraphQLString,
      description: 'The identifier of the ingredient',
    },
    name: { 
      type: GraphQLString,
      description: 'The name of the ingredient',
    },
    description: { 
      type: GraphQLString,
      description: 'Text describing the ingredient',
    },
  }),
});

export default IngredientType;
