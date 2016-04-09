import algoliasearch from 'algoliasearch';

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