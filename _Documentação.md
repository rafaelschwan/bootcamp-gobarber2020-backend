
# Para criar o projeto 
yarn init -y

# Dependências

  ## Produção
	yarn add express
  yarn add uuidv4
  yarn add date-fns

  ## Desenvolvimento
	yarn add typescript -D
  yarn add @types/express -D
  yarn add ts-node-dev -D
  yarn add eslint@6.8.0 -D
  yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

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

  ## Pattern de repository
    Persistencia <-> Repository -> Rota