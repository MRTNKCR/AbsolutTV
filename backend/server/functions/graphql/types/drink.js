import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

const DrinkType = new GraphQLObjectType({
  name: 'Drink',
  description: 'The Drink is the main resource. It contains all the information needed to create the drink.',
  fields: () => ({
    id: { 
      type: GraphQLString,
      description: 'The id of the drink',
    },
    name: { 
      type: GraphQLString,
      description: 'The name of the drink',
    },
    description: { 
      type: GraphQLString,
      description: 'General text describing the steps needed to mix the drink, without tags',
      resolve: (drink) => drink.descriptionPlain,
    },
    story: { 
      type: GraphQLString,
      description: 'Story about the drink if exists',
      resolve: (drink) => drink.story ? drink.story : null,
    },
    image: ImageUrlField
  }),
});

const ImageUrlField = {
  type: GraphQLString,
  description: 'Image of ingredient',
  args: {
    size: { type: GraphQLString },
  },
  resolve: (source, {size}) => {
    const id = source.id;
    return 'http://assets.absolutdrinks.com/drinks/' + size + '/' + id + '.png'
  },
}

export default DrinkType;
