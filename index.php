<?php
    $route = explode("/", $_GET['url'] ?? 'home');

    if(file_exists("views/pages/{$route[0]}.html")) {
        include "views/pages/{$route[0]}.html";
    }
?>