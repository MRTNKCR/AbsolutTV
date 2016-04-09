import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
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
    imageUrl: ImageUrlField,
    videoUrl: {
      type: GraphQLString,
      description: 'Youtube video URL of the drink',
      resolve: (drink) => {
        const videosData = drink.videos.filter((v) => v.type === 'youtube');
        if (videosData.length === 0) return null;
        const youtubeId = videosData[0].video;
        return 'https://www.youtube.com/watch?v=' + youtubeId;
      }
    },
    ingredients: {
      type: new GraphQLList(GraphQLString),
      description: "Ingredients in the drink",
      resolve: (drink) => {
        return drink.ingredients.map((i) => i.textPlain);
      },
    },
  }),
});

const ImageUrlField = {
  type: GraphQLString,
  description: 'Image URL of the drink',
  args: {
    maxWidth: {
      type: GraphQLInt,
      description: "Max image width in pixels. Default: 640",
    },
    maxHeigth: {
      type: GraphQLInt,
      description: "Max image height in pixels. Default: 640",
    },
    format: {
      type: GraphQLString,
      description: "[png | jpg] Default: png",
    },
  },
  resolve: (source, {maxWidth, maxHeigth, format}) => {
    maxWidth = maxWidth || 640;
    maxHeigth = maxHeigth || 640;
    format = format || 'png';

    const size = maxWidth + 'x' + maxHeigth;
    const id = source.id;
    const url = 'http://assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection';
    return [url, size, id + '.' + format].join('/');
  },
}

export default DrinkType;
