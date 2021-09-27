# DSVendas
https://dsvendas-jg.netlify.app

# Sobre o projeto
DSVendas é uma aplicação full stack web construída durante a 4ª edição da Semana DevSuperior (#sds4), evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

Esta aplicação consiste em exibir um dashboard de dados sobre vendas, apresentando elementos de tabelas e gráficos para ilustrar as informações.

## Layout web
![Imgur](https://i.imgur.com/PRT0k3k.png)

## Modelo conceitual
![Image](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/sds3-mc.png)

## Tecnologias utilizadas
## Back-End
* Java
* Spring Boot

  Dependências do Spring Boot
    * Spring Boot Web
    * Spring Data JPA / Hibernate
    * Spring Security
    * H2 Database
    * PostgreSQL Driver
    
* Maven

## Front-End
* HTML / CSS / JavaScript / TypeScript
* React

  Libs
    * React Router DOM
    * Axios
    
* Bootstrap
* Apex Charts

## Implantação em produção
* Back-End: Heroku
* Front-End: Netlify
* Banco de dados: PostgreSQL

# Como executar o projeto
## Back-End
Pré-requisitos: Java 11

```
# Clonar repositório
git clone https://github.com/joaozinsh/projeto-sds4.git

# Entrar na pasta do projeto back end
cd backend

# Executar o projeto
./mvnw spring-boot:run
```

## Front-End
Pré-requisitos: npm / yarn

```
# Clonar repositório
git clone https://github.com/joaozinsh/projeto-sds4.git

# Entrar na pasta do projeto front end
cd frontend

# Instalar dependências
npm install

# Executar o projeto
npm start
```
