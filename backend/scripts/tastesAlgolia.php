<?php

require __DIR__ . '/vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$client = new \AlgoliaSearch\Client(getenv('ALGOLIA_APP_ID'), getenv('ALGOLIA_API_KEY'));

$index = $client->initIndex("tastes");
$index->clearIndex();
$index->setSettings([
	'attributesToIndex' => ['name', 'description', 'id'],
	'customRanking' => ['asc(position)'],
]);

$tastes = json_decode(file_get_contents(__DIR__ . '/tastes.json'), true);

$batch = [];
foreach ($tastes as $i => $taste) {
	$batch[] = [
		'position' => $i,
		'id' => $taste['id'],
		'name' => $taste['name'],
		'description' => $taste['description'],
	];
}

dump($index->addObjects($batch));
