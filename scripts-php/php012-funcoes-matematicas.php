<?php

    $nome = "Fulano";
    $sobrenome = 'de Tal';  // Aspas simples podem ser usadas
    $peso = 68.5;
    $altura = 1.72;
    $imc = $peso / ($altura * $altura);
    echo "Nome: " . $nome . " " . $sobrenome . "<br>";
    echo "IMC = " . $imc;

?>
