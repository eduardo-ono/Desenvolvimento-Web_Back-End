> Desenvolvimento Web (Back-End) > Conteúdo > Docker

# Instalação

Prof. Eduardo Ono

<br>

## Requisitos Mínimos para a Instalação do Docker Desktop no Windows 10

* Windows 10 Professional 64-bit com o Hyper-V habilitado, 6 GB RAM

ou

* Windows 10 Home v. 2004 (ou mais recente) 64-bit e WSL 2, 4 GB RAM

<br>

### Instalação do WSL 2 e do Docker no Windows 11 Home

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/umFz3MRTSN0/default.jpg)](https://www.youtube.com/watch?v=umFz3MRTSN0) | <sup>[Uzkha@Tech]</sup><br>[__Instalando Docker com WSL2 no Windows__](https://www.youtube.com/watch?v=umFz3MRTSN0)<br><sub>(9:17, YouTube, Mar/2022)</sub>

### Instalação do WSL 2 no Windows 10 Home

Por padrão, o WSL não vem instalado no Windows 10.

1. Verificar se o Windows 10 Home está atualizado para a versão 2004 (Abr/2020) ou mais recente. Caso não esteja, atualizar o Windows.

1. Na janela [Recursos do Windows](recursos-do-windows.png) (procure através da ferramenta Pesquisar na barra de tarefas), marque as opções `Plataforma de Máquina Virtual` e `Subsistema do Windows para Linux`. Clique em OK. Pode ser necessário a reinicialização o sistema.

1. Fazer o download e instalar o [Pacote de atualização do kernel do Linux do WSL2 para sistemas x64](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) (~14 MB).

1. No Microsoft Store, pesquisar e instalar o Ubuntu 20.04 LTS (~400 MB).

1. Verificar no terminal do PowerShell qual versão do WSL (1 ou 2) está sendo utilizada no Windows 10 Home:

  ```PowerShell
  wsl - l -v
  ```

1. Caso esteja sendo executada versão 1, mudar para a versão 2 no PowerShell:

  ```PowerShell
  wsl --set-version Ubuntu-20.04 2
  ```

<br>

Vídeo com o procedimento completo da instalação do WSL 2 no Windows 10 Home:

* [David Bombal] [WSL 2: Getting started](https://www.youtube.com/watch?v=_fntjriRe48) (YouTube, 20:33, Jun/2020)

<br>

## Instalação do Docker Desktop no Windows 10/11

* Link para download:

  * https://www.docker.com/products/docker-desktop

<br>

## Instalação do Docker no Linux/Ubuntu

```sh
sudo apt update && sudo apt upgrade
sudo apt install docker-ce
```

### Vídeos de Apoio

| Thumb | Descrição |
| :-: | --- |
| [![img](https://img.youtube.com/vi/wpdcGgRY5kk/default.jpg)](https://www.youtube.com/watch?v=wpdcGgRY5kk) | <sup>[Full Cycle]</sup><br>[__Rodando Docker no WSL 2 sem Docker Desktop__](https://www.youtube.com/watch?v=wpdcGgRY5kk)<br><sub>(24:19, YouTube, Jun/2021)</sub>

<br>
