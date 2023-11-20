<?php
header('Content-Type: text/xml');

$username = $_GET['username'];
$disponible = rand(0, 1) == 1 ? 'true' : 'false';

$xml = "<?xml version='1.0' encoding='UTF-8'?>
<respuesta>
    <disponible>{$disponible}</disponible>
</respuesta>";

echo $xml;
?>