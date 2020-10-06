# DevOps > Docker

Prof. Eduardo Ono

<br>

## Conceitos
<br>

> Docker é uma ferramenta de software capaz que gerenciar ambientes de execução.

> Uma Imagem Docker é um modelo (_template_) ...

> Um contêiner é uma instância de uma imagem em execução.

> Dockerfile 

<br>

## Instalação do Docker no Windows 10
<br>

> ### Pré-Requisitos

* Windows 10 Home e WSL 2
* Windows 10 Professional e Hyper-V

<br>

> ### Download do Docker Desktop

* https://www.docker.com/products/docker-desktop

<br>

## Instalação do Docker no Ubuntu
<br>

## Utilizando o Docker
<br>

Versão do Docker Instalada:

    docker --version

> ### Executando um contêiner
<br>

Para verificar quais conêineres estão em execução:

    docker ps

    docker run -d -p 8080:80 nginx:latest

    doceker run -d -p 8080:80 -p 3000:80 nginx:latest

Abrindo o navegador no endereço localhost:8080 o servidor nginx deverá estar sendo executado.

<br>

> ### Removendo um contêiner
<br>

    docker rm $(docker ps -aq)


> ### Exemplos Dockerfiles
<br>

```
FROM nginx:latest
ADD ./usr/share/
```

    docker build --tag servidorweb:latest

<br>

## Vídeos

* [AzureTar] Introdução a Docker Desktop usando WSL2, Windows Terminal e VS Code | [YouTube](https://youtu.be/eJQEISCKdos) (33:51)
* [Amigoscode] [Docker and Kubernetes Tutorial (Set/2020)](https://www.youtube.com/watch?v=bhBSlnQcq2k) (4:17:59)

<br>

## Bibliografia
<br>

* MIELL, Ian; SAYERS, Aidan Hobson. [Docker in Practice](https://archive.org/details/DockerInPractice), 2016.
* GUPTA, Arun. [Docker for Java Developers](https://archive.org/details/DockerForJavaDevelopers), 2016.
