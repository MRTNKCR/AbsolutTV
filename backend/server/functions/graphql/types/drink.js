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
    image: ImageUrlField,
    video: {
      type: GraphQLString,
      description: 'Youtube video URL of the drink',
      resolve: (drink) => {
        const videosData = drink.videos.filter((v) => v.type === 'youtube');
        if (videosData.length === 0) return null;
        const youtubeId = videosData[0].video;
        return 'https://www.youtube.com/watch?v=' + youtubeId;
      }
    }
  }),
});

const ImageUrlField = {
  type: GraphQLString,
  description: 'Image URL of the drink',
  args: {
    size: { type: GraphQLString },
  },
  resolve: (source, {size}) => {
    const id = source.id;
    return 'http://assets.absolutdrinks.com/drinks/' + size + '/' + id + '.png'
  },
}

export default DrinkType;
