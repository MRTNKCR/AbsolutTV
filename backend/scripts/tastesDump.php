<?php

require 'vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$apiKey = getenv('ADDB_API_KEY');

$response = file_get_contents('http://addb.absolutdrinks.com/tastes?apiKey=' . $apiKey);

$page = json_decode($response, true);
$data = $page['result'];

echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);