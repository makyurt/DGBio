<?php

include('top-cache.php');

print_r(file_get_contents("https://chainz.cryptoid.info/dgb/api.dws?q=getblockcount"));

include('bottom-cache.php');

?>