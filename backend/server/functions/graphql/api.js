import algoliasearch from 'algoliasearch';
import axios from 'axios';

export function searchAlgolia(indexName, searchTerm) {
  console.log('GET Algolia: ' + searchTerm);

  if (!process.env.ALGOLIA_APP_ID) {
    throw new Error('Missing ENV var: ALGOLIA_APP_ID')
  }
  if (!process.env.ALGOLIA_API_KEY) {
    throw new Error('Missing ENV var: ALGOLIA_API_KEY')
  }

  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const index = client.initIndex(indexName);
  return index.search(searchTerm).then((response) => {
    return response.hits;
  });
}

export function searchAddbByIngredient(ingredientId) {
  console.log('GET ADDB: ' + ingredientId);

  if (!process.env.ADDB_API_KEY) {
    throw new Error('Missing ENV var: ADDB_API_KEY')
  }

  const url = 'http://addb.absolutdrinks.com/drinks/with/' + ingredientId + '?apiKey=' + process.env.ADDB_API_KEY;

  return axios.get(url).then((response) => response.data.result);
}

export function searchAddbByTasteId(tasteId) {
  console.log('GET ADDB: ' + tasteId);

  if (!process.env.ADDB_API_KEY) {
    throw new Error('Missing ENV var: ADDB_API_KEY')
  }

  const url = 'http://addb.absolutdrinks.com/drinks/tasting/' + tasteId + '?apiKey=' + process.env.ADDB_API_KEY;

  return axios.get(url).then((response) => response.data.result);
}