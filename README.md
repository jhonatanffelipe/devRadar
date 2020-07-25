# DevRadar
Projeto desenvolvido ao longo da Semana OmniStack 10 - Rocketseat. Todo o projeto foi denvolvido com a stack NodeJS, React e React Native.

A ideia do projeto é desenvolver uma aplicação que permita se cadastrar e localizar desenvolvedores proximo de sua região, com o intuito de aproximar os desenvolvedores que utilizam as mesmas tecnologias.

## Backend

Foi desenvolvida uma API REST desenvolvida em NodeJS utilizando Javascript. O Banco de dados utilizado foi o MongoBD Atlas;

## Frontend Web

- A Aplicação web tem por responsabilidade permitir que as desenvolvedores se cadastrem utilizando seu perfil do Github, tecnologias de trabalho e sua localização que é buscada via serviço de geolocalização. 
- Foi desenvolvida em Javascript utilizando o framework ReactJS. 

<img alt="DevRadar" src="https://raw.githubusercontent.com/jhonatanffelipe/devRadar/master/assets/home.png" height="350px" />

## Mobile

- A Aplicação mobile permite que o desenvolvedor filtre pelas tecnologias e encontre desenvolvedores que utilizam as mesmas tecnologias. Além disso é possivel acessar o perfil do desenvolvedor pelo aplicativo;
- O desenvolvimento da aplicação mobile foi realizado utilizando a ferramenta Expo, desenvolvida em Javascript utilizando o framework React Native.
- Utiliza serviço de geolacalização para localizar os desenvolvedores

<div class='row'>
<img alt="DevRadar" src="https://raw.githubusercontent.com/jhonatanffelipe/devRadar/master/assets/mobile.jpeg"  height="350px" />
</div>

## Como Executar a aplicação?

- O primeiro passo é clonar o repositório nossa base;
- Em seguida dentro de cada um dos diretórios server, web e mobile iremos executar no terminal o comando `yarn`, para baixar as dependências de nossas aplicação;
- Iremos começar executando nosso server, para isso devemos executar o camando `yarn dev`;
- Com nosso servidor executando podemos executar nossa aplicação web com o comando `yarn start`;
- Para executar nosssa aplicação mobile, precisamos ter instalado em nosso dispositivo mobile um Aplicativo chamado Expo, e estar conectado na mesma rede wi-fi do nosso servidor;
- Executaremos o comando `yarn start`, e iremos com nosso aplicativo, escanear o QRCode gerado em nosso terminal;
