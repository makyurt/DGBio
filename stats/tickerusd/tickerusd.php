<?php

include('top-cache.php');

$url = 'https://api.bittrex.com/v3/markets/dgb-usd/ticker';
$data = file_get_contents($url);
$price = json_decode($data, true);
$usd = ($price['lastTradeRate']);
print_r (substr($usd, 0, 6));

include('bottom-cache.php');

?>