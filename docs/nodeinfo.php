<?php

include('top-cache.php');

$context = stream_context_create(
    array(
        "http" => array(
            "header" => "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
        )
    )
);
	
$data=json_decode(file_get_contents('https://api.github.com/repos/digibyte/digibyte/releases', false, $context),true);

$data2=json_decode(file_get_contents('https://api.github.com/repos/digibyte-core/digibyte/releases', false, $context),true);

$sum = 0;

foreach ($data[0]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[1]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[2]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[3]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[4]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[5]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[6]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[7]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[8]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data[9]['assets'] as $value) {
$sum += $value['download_count'];
}

foreach ($data2[0]['assets'] as $value) {
$sum += $value['download_count'];
}

print_r($sum);

include('bottom-cache.php');

?>