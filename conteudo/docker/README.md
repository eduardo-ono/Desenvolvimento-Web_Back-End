### Desenvolvimento Web (Back-End)

# DevOps > Docker

Prof. Eduardo Ono

<br>

## Utilizando o Docker

### Principais Comandos

* Exibir a versão do Docker instalada:

    ```sh
    docker --version
    ```

* Instalar (_pull_) de uma imagem Docker:

    ```sh
    docker pull <nome_da_imagem>
    ```

    * Exemplo

        ```
        docker pull nginx
        ```

* Listar todas as imagens instaladas:

    ```
    docker images
    ```

* Executar um _container_ baseado em uma imagem Docker, ou seja, uma instância de uma imagem:

    docker run <nome_da_imagem>:<nome_da_tag>

Exemplo:

    docker run nginx:latest

> Para verificar quais conêineres estão em execução:

    docker ps

> Para executar um contêiner (exemplos):

    docker run -d -p 8080:80 nginx:latest

    doceker run -d -p 8080:80 -p 3000:80 nginx:latest

Obs.: Abrindo o navegador no endereço localhost:8080 o servidor nginx deverá estar sendo executado.

> Removendo todos os contêineres
<br>

    docker rm $(docker ps -aq)

<br>

## Dockerfiles (Exemplos)

```
FROM nginx:latest
ADD ./usr/share/
```

    docker build --tag servidorweb:latest

<br>

## Bibliografia

* MIELL, Ian; SAYERS, Aidan Hobson. [Docker in Practice](https://archive.org/details/DockerInPractice), 2016.

* GUPTA, Arun. [Docker for Java Developers](https://archive.org/details/DockerForJavaDevelopers), 2016.

* STONEMAN, Elton. [Docker Succinctly](https://www.syncfusion.com/ebooks/docker_succinctly).

<br>
