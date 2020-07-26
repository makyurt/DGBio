<?php

include('top-cache.php');

$url = 'https://api.bittrex.com/v3/markets/dgb-btc/ticker';
$data = file_get_contents($url);
$price = json_decode($data, true);
$btc = ($price['lastTradeRate']);
print_r ($btc);

include('bottom-cache.php');

?>