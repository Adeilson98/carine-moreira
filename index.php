<?php
    $route = explode("/", $_GET['url'] ?? 'home');

    if(file_exists("pages/{$route[0]}.html")) {
        include "pages/{$route[0]}.html";
    }
?>