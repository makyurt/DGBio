<?php

include('top-cache.php');

$url = 'https://api.bittrex.com/v3/markets/dgb-eth/ticker';
$data = file_get_contents($url);
$price = json_decode($data, true);
$eth = ($price['lastTradeRate']);
print_r ($eth);

include('bottom-cache.php');

?>