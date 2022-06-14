Este projeto é um simples estudo do funcionamento de filas com _RabbitMQ_ e _NodeJS_. Consiste em
um servidor _REST_ que ficará ouvindo requisições no endpoint _/task_ e enviará o corpo dessas
requisições para a fila de mensagens enquanto um consumer ficará ouvindo essa fila e logando as mensagens
recebidas.

## Como rodar?

Para executar esse projeto você precisa ter o docker installado, assim poderá executar o comando `docker-compose up -d`
para executar o servidor do _RabbitMQ_.
Após isso, pode executar os comandos `yarn start:server` e `yarn start:consumer` em diferentes terminais para iniciar o servidor REST e
o consumer respectivamente.

## Testando o projeto

Quando tudo estiver rodando, você pode fazer uma requisição para o endpoint _POST /task_ com um corpo
em formato JSON ex:

```
{
  "message": "This is a test message!"
}
```

E assim deverá ver os logs das suas requisições sendo exibidos pelo consumer.
