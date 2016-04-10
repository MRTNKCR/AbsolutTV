<?php

require 'vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$apiKey = getenv('ADDB_API_KEY');

$response = file_get_contents('http://addb.absolutdrinks.com/drinks?apiKey=' . $apiKey . '&pageSize=100');

$page = json_decode($response, true);
$data = $page['result'];

while(isset($page['next']) && is_string($page['next'])) {
	$response = file_get_contents($page['next']);
	$page = json_decode($response, true);
	$data = array_merge($data, $page['result']);
}

echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);