# certitradutor

Este projeto é um tradutor do qual transcreve o numero digitado para extenso

### Instalação
Para executar o projeto, clone o repositorio em uma pasta.

Entre na pasta /certitradutor
```
cd certitradutor
```

## Docker

```
docker build --rm -t danielruaro/tradutor-daniel .
```

```
docker run -d -p 3000:3000 danielruaro/tradutor-daniel
```

O serviço estará disponivel em
```
localhost:3000
```

## Windows
Caso esteja utilizando o SO Windows, é necessario verificar o ip da docker-machine com o comando

```
docker-machine env
```

O ip que retornar em DOCKER_HOST será o seu ip de acesso


## Sem Docker

Depois disso, instale as dependencias
```
npm install
```

Execute o serviço

```
npm run server
```

Faça requisição para: a variavel (numero) é o numero a ser traduzido

```
localhost:3000/:numero
```
