> <sup><strong>Desenvolvimento Web (Back-End) > Conteúdo > DevOps</strong></sup>

# Docker

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

  ```sh
  docker run <nome_da_imagem>:<nome_da_tag>
  ```

  Exemplo:

  ```sh
  docker run nginx:latest
  ```

* Verificar quais _containers_ estão em execução:

  ```sh
  docker ps
  ```

* Para executar um _container_ (exemplos):

  ```sh
  docker run -d -p 8080:80 nginx:latest
  docker run -d -p 8080:80 -p 3000:80 nginx:latest
  ```

Obs.: Abrindo o navegador no endereço localhost:8080, o servidor nginx deverá estar sendo executado.

* Remover todos os _containers_:

  ```sh
  docker rm $(docker ps -aq)
  ```

<br>

## Dockerfiles (Exemplos)

```sh
FROM nginx:latest
ADD ./usr/share/
```

```sh
docker build --tag servidorweb:latest
```

<br>

## Bibliografia

* MIELL, Ian; SAYERS, Aidan Hobson. [Docker in Practice](https://archive.org/details/DockerInPractice), 2016.

* GUPTA, Arun. [Docker for Java Developers](https://archive.org/details/DockerForJavaDevelopers), 2016.

* STONEMAN, Elton. [Docker Succinctly](https://www.syncfusion.com/ebooks/docker_succinctly).

<br>
