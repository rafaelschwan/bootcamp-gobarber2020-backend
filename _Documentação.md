## Rotas: pegam request, chamam regras, retornam response

## Services: rodam a manipulacao de regras de negocio, utilizando um repositorio custom ou o default do typeorm

## Repositories: criam o repositorio de um model, normalmente custom com funcoes a mais

## Rotas > Services (getRepository)

## Rotas > Repositories (cria um custom, necessidade de uma funcao nao default) > Services (getCustomRepository)

# Para criar o projeto

yarn init -y

# Dependências

## Produção

    yarn add express

yarn add uuidv4
yarn add date-fns
yarn add typeorm
yarn add pg
yarn add reflect-metadata
yarn add bcryptjs
yarn add jsonwebtoken
yarn add multer
yarn add express-async-errors
yarn add cors

## Desenvolvimento

yarn add @types/bcryptjs -D
yarn add typescript -D
yarn add @types/express -D
yarn add ts-node-dev -D
yarn add eslint@6.8.0 -D
yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
yarn add @types/jsonwebtoken -D
yarn add @types/multer -D

# Configurações

## Iniciar o tsconfig.json

yarn tsc --init

## No tsconfig.json

"outDir": "./dist"
"rootDir": "./src"

## No package.json

    "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev --no-notify --inspect --transpileOnly --ignore-watch node_modules src/server.ts"
    },

## Configurar editor config

    https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c

## Configurar eslint

    https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99

## Configurar prettier

    https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425

## TypeORM

    Criar ormconfig.json e colocar params de base, porta, host, etc
    No windows:
        Abrir o package.json e colar o código
          "resolutions": {
            "tslib": "1.11.2"
          }
        Deletar node_modules e rodar yarn novamente
    Configurar para que o typeorm funcione com arquivos .ts
      No package.json, incluir nos scripts:
        "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

# Anotações

## Pattern de repository

    Persistencia <-> Repository -> Rota

## Padrão decorator

    @Entity por exemplo
