<?php
header('Content-Type: text/xml');

$username = $_GET['username'];
$options = array();

// Simulación de generación de opciones alternativas
$occupied = array("username", "user123", "john_doe", "cool_guy");

for ($i = 0; $i < 3; $i++) {
    $suggestion = $username . '_' . rand(10, 99); // Simplemente agregamos un número aleatorio
    while (in_array($suggestion, $occupied)) {
        $suggestion = $username . '_' . rand(10, 99);
    }
    array_push($options, $suggestion);
}

$xml = "<?xml version='1.0' encoding='UTF-8'?>
<alternativas>";

foreach ($options as $opt) {
    $xml .= "<opcion>{$opt}</opcion>";
}

$xml .= "</alternativas>";

echo $xml;
?>