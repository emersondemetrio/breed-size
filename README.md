# breed-size
Breed Size Calc

## Passo 1 

Rode o comando: 

`node install`

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