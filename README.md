# breed-size
Breed Size Calc

## O que isso faz?

- Primeiro, converte os dados de treino no arquivo train.csv para json, facilitando o manuseio. A conversão é feita utilizando a lib babyparse, que tem justamente este fim.
- Em seguida, o programa anda linha por linha atrás dos dados que posteriormente serão adicionados a um arquivo .sql, para por fim serem trabalhados.

## Passo 1 

Rode o comando: 

`npm install`

## Passo 2

Rode o comando: 

`node parser`
Isso criará o arquivo /output/data.json, que será usado no

## Passo 3

Rode o comando:

`node createSqlFile`

Que irá criar o arquivo /output/BATCH.sql

## Passo 4

Em seu SGBD favorito, importe a estrutura (treino.sql) e em seguida, os dados em /output/BATCH.sql