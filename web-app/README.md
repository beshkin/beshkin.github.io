# Web app
Purpose of this project is to provide user interface for listing and searching for movies.

## Installation
If you run in development environment, feel free to use docker compose in root directory.
Otherwise, just install all the packages with `yarn` command.

## Pre-build setup
1. Create `.env.local` file. You can simply copy from example:
```shell
cp .env.example .env.local
```

## DEV start
You can use root docker compose config to run development environment.
Use url [http://localhost:3000](http://localhost:3000) for work.

## Production start
Run `yarn build` and the project will create a build for your app in `build/` directory.
Use content of `build/` directory for deploying to the site you want to show.
