<?php

require __DIR__ . '/vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$client = new \AlgoliaSearch\Client(getenv('ALGOLIA_APP_ID'), getenv('ALGOLIA_API_KEY'));

$index = $client->initIndex("ingredients_test");
$index->clearIndex();
$index->setSettings([
	'attributesToIndex' => ['type', 'id', 'name'],
	'customRanking' => ['asc(position)'],
]);

$ingredients = json_decode(file_get_contents(__DIR__ . '/ingredients.json'), true);

$batch = [];
foreach ($ingredients as $i => $ingredient) {
	$batch[] = [
		'position' => $i,
		'id' => $ingredient['id'],
		'type' => $ingredient['type'],
		'name' => $ingredient['name'],
		'description' => $ingredient['description'],
	];
}

dump($index->addObjects($batch));
