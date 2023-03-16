<h1 align="center">Express Typescript Authentication Boilerplate</h1>

## ❯ Why

To create a modular server application that can be easily built upon.

### Features

- **Basic Logging** using [pino](https://github.com/pinojs/pino).
- **Easy API Testing** with VSCode [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.
- **Clear Structure** with different layers such as controllers, services, routes, models, middlewares...

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install pnpm globally

```bash
npm install -g pnpm
```

Configuring a mongo database via docker.

```bash
docker run --name dummy_mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

### Step 2: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your private/public key information.

> You will need to [generate](https://travistidwell.com/jsencrypt/demo/) private/public keys and have them [encoded](https://www.base64encode.org/).

### Step 3: Run your application

Go to the project dir and start your app with this pnpm script.

```bash
pnpm run dev
```
