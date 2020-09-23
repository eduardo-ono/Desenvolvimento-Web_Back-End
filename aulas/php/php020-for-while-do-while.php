<?php

    echo "<p>";
    for ($i = 0; $i < 10; $i++)
    {
        if ($i % 2 == 0)
            echo $i . "<br>";
    }
    echo "</p>";

    echo "<p>";
    $i = 0;
    while ($i < 10)
    {
        if ($i % 2 == 1)
            echo $i . "<br>";
        $i++;
    }

    echo "</p>";
    $i = 0;
    do {
        if ($i % 2 == 0)
            echo $i . "<br>";
        $i++;
    } while ($i < 10);
    echo "</p>";

?>
