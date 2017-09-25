<?php

function debugPHP($array) {
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}

function redirect($url) {
    die('<script>window.location.href="' . $url . '";</script>');
}
