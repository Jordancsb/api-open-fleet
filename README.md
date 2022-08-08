### 

<details>
<summary> Teste Prático - Desenvolvimento FullStack </summary>
<div class="text-justify">

Esse desafio tem o objetivo de testar algumas habilidades em back-end.

O Desafio - Criar uma API para gestão de frete de uma transportadora

#### A api consiste em algumas entidades:

##### Motorista - (Motorista que irá efetuar o frete)
O motoristorista pode aceitar o frete de apenas uma transportadora

##### Transportadora - (Empresa que irá disponibilizar o frete)
A transportadora pode disponibilizar diversos fretes
Os fretes precisam ser ordenados por status e data

##### Frete - (Frete disponibilizado peka transportadora)
O cálculo do frete é a soma do KM + volume da carga em KG
R$ 1,60 por km
R$ 2,00 Por kg

##### Veículo - Veículo que irá efetuar o frete
Veículo deve pertencer a um único motorista

##### Tipo de veículo - Tipos de veículos
Os tipos de veículos devem conter os seguintes campos:
Capacidade em kg
Altura do baú
Largura do baú
Comprimento do baú
Peso total do veículo

#### Documentação
No README do projeto explique:

- Passos para execução do projeto.
- Requisitos
- Usar língua inglesa para escrita do código
- Usar NodeJs + TypeScript
- Banco de dados Postgres
- Adicionar swagger
- API RestFull
- Você é livre para utilizar algum framework node ex: Nest
- Você é livre para definir a modelagem e organização das features a serem implementadas.

#### O que será avaliado
- Organização do projeto.
- Simplicidade da implementação.
- Modelagem do Banco de Dados.
- Qualidade do código.
= Utilização correta dos status HTTP (200, 404, 500, etc...) Processo de build.
- Qualidade dos testes (é um diferencial).

#### Dúvidas
- Caso não encontre a sua resposta, sinta-se à vontade para abrir uma issue =]

</div>
</details>

## Projeto
Aplicação de Cadastro de Empresas integrando entre o back-end em Node.js usando TypeScript e AdonisJS com front-end em Quasar VueJS, conectado e armazenado banco de dados local (SQLite) usando um ORM (Lucid). Utilizando Arquitetura MVC, pontos de APIRestful e CleanCode.

## Diagrama
<img align="center" width="1000" src="frontend\src\assets\diagrama.JPG">

### Rodando a aplicação

Baixe ou clone a aplicação em sua máquina, dentro da pasta backend execute o comando:
```bash
node ace serve --watch
```
Aplicação abrirá em na Porta 3333 -> Rotas estão agrupadas, portando a raiz exibirá Hello World por default e métodos estão dentro do caminho 'localhost:3333/api/companies'

Agora dentro da pasta frontend execute o comando 
```bash
npx quasar dev
```
Aplicação abrirá na Porta 9000 -> Com a rota raiz para tabela de empresas e localhost:9000/#/form-articles' para model de cadastro e atualização dos dados.

O teste de API foi feito através o Thunder Client, uma extensão do Visual Studio Code!

A Visualização das tabelas criadas foi atraves do SQLite Viewer (Internamente) e do Bekeeper Studio (Externamente)

## Criação
### Instalação e Preparação - Ambiente Backend

Use o gerenciador de pacotes node [npm](https://docs.adonisjs.com/guides/installation) para iniciar a aplicação e criar as configurações iniciais.

```bash
npm init adonis-ts-app@latest hello-world
```

```bash
node ace serve --watch
```

### Instalação e Preparação - Ambiente Frontend

Use o gerenciador de pacotes node [npm](https://quasar.dev/start/quasar-cli) para iniciar a aplicação e criar a estrutura de pastas inicial.

```bash
$ npm i -g @quasar/cli
$ npm init quasar
```
Verifique os scripts do package.json

```bash
// package.json
"scripts": {
  "dev": "quasar dev",
  "build": "quasar build",
  "build:pwa": "quasar build -m pwa"
}
```
E inicie a aplicação com comando abaixo:

```bash
npx quasar dev
```
### Algumas configurações 

Conventional Commits é uma convenção em cima dos commits que fornece um conjunto fácil de regras para criar um histórico de confirmação explícito; o que torna mais fácil escrevê-los e identifica-los. 
```bash
npm i -D git-commit-msg-linter
```

### Ferramentas Utilizadas
- Visual Studio Code
- WSL Ubuntu 20.04LTS
- Node v16.15.1
- npm 8.11.0
- SQLite
- Bekeeper Studio
- Git
- Jest

### Autor
Jordan Cruz
