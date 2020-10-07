# DevOps > Docker

Prof. Eduardo Ono

<br>

## Conceitos
<br>

> **Docker** é um conjunto de produtos de plataforma como serviço que usam virtualização a nível de sistema operacional para entregar software em pacotes chamados contêineres.

> **Docker Desktop** é uma ferramenta de software que fornece um ambiente de desenvolvimento através da criação, transporte e execução de contêineres. 

> Uma **Imagem Docker** é um modelo (_template_) para a criação de ambientes em contêiners através do Docker.

> Um **contêiner** é uma instância de uma imagem Docker. Cada contêiner pode ser executado isoladamente de outros contêineres, agrupando seus próprios softwares, bibliotecas e arquivos de configuração.

<br>

## Pré-Requisitos para a Instlação do Docker Desktop no Windows 10
<br>

* Windows 10 Professional com o Hyper-V habilitado

ou

* Windows 10 Home e WSL 2

<br>

Vídeo com o procedimento de instalação do WSL 2 no Windows 10 Home:

* [David Bombal] [WSL 2: Getting started(Jun/2020)](https://www.youtube.com/watch?v=_fntjriRe48) (YouTube, 20:33)

OBS.: Para a instalação do WSL 2 no Windows 10 Home, este deve estar atualizado pelo menos com a versão 2004 (Abr/2020).

<br>

### Após a instalação do WSL e da distribuição Ubuntu 20.04:
<br>

Para verificar qual versão do WSL (1 ou 2) está sendo utilizada no Windows 10 Home, abrir o terminal do PowerShell  e digitar:

    wsl -l -v

Caso esteja sendo executada versão 1, para mudar para a versão 2 digitar no PowerShell:

    wsl --set-version Ubuntu-20.04 2


<br>

## Instalação do Docker Desktop no Windows 10
<br>

> ### Download do Docker Desktop

* https://www.docker.com/products/docker-desktop

<br>

## Instalação do Docker no Ubuntu
<br>

    $ sudo apt install docker-ce

<br>

## Utilizando o Docker
<br>

> Para exibir a versão do Docker instalada:

    docker --version

> Para instalar (_pull_) uma imagem Docker:

    docker pull <_nome_da_imagem_>

Exemplo:

    docker pull nginx

> Para listar todas as imagens instaladas:

    docker images

> Para executar um contêiner baseado em uma imagem Docker, ou seja, uma instância de uma imagem:

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

## Dockerfiles
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
