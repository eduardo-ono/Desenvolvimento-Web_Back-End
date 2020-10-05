<?php

$peso = 68.5;
$altura = 1.70;
$imc = imc($peso, $altura);
echo "IMC = " . $imc;

function imc($peso, $altura)
{
    $imc = $peso / ($altura * $altura);

    return $imc;
}

?>
