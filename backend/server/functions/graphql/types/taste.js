import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

const TasteType = new GraphQLObjectType({
  name: 'Taste',
  description: 'Basic drink characteristic',
  fields: () => ({
    id: { 
      type: GraphQLString,
      description: 'The identifier of the taste',
    },
    name: { 
      type: GraphQLString,
      description: 'The name of the taste',
    },
    description: { 
      type: GraphQLString,
      description: 'A general text that describes the taste',
    },
  }),
});

export default TasteType;
