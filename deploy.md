# Steps to deploy in EC2 instance

## Update packages

sudo apt update -y

## Install nodejs

sudo apt install nodejs -y

## Install npm

sudo apt install npm -y

## Clone repository

git clone https://github.com/italoalmeida/simple-server.git
cd simple-server

## Install packages

npm install

## Run server

node index.js
