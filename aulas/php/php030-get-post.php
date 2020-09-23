<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>PHP :: GET e POST</title>
        <meta name="author" content="Eduardo Ono">
        <style>
            body {
                margin: 5% 20% 5% 20%;
            }
        </style>
    </head>
    <body>
        <?php
            $username = $_GET["username"];
            $password = $_GET["password"];
            echo "<p>" . $username . "<br>" . $password . "</p>";
            $username = $_POST["username"];
            $password = $_POST["password"];
            echo "<p>" . $username . "<br>" . $password . "</p>";
        ?>
     </body>
</html>
