<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>PHP :: GET e POST</title>
        <meta name="author" content="Eduardo Ono">
        <style>
            body {
                font-size: 1.2rem;
                margin: 5% 20% 5% 20%;
            }
        </style>
    </head>
    <body>
        <script src="header.js"></script>
        <p><br>
        </p>
        <p style="background-color: #505050">
            <form action="php030-get-post.php" method="GET">
                Usuário: <input type="text" name="username"><br><br>
                Senha: <input type="text" name="password"><br><br>
                <input type="submit">
            </form>
            <p><br></p>
            <form action="php030-get-post.php" method="POST">
                Usuário: <input type="text" name="username"><br><br>
                Senha: <input type="text" name="password"><br><br>
                <input type="submit">
            </form>
        </p>
     </body>
</html>
