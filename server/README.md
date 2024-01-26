# Server

Backend is developed using NestJS with MySQL database communication

## Installation
If you run in development environment, feel free to use docker compose in root directory.
Otherwise, just install all the packages with `yarn` command.

## Pre-build setup
1. Create `.env` file. You can simply copy from example:
```shell
cp .env.example .env
```
2. Update database settings for your local setup.
Note: in case you use docker image from the project, you don't need to change database.
3. Add API ACCESS key from The Movie DB ([https://www.themoviedb.org/](https://www.themoviedb.org/))
You need to register and obtain the API key from Profile > API page.
4. Update Web app url. 
In case you build a standalone service, specify web app url. It is used for CORS origin value.

## DEV start
You can use root docker compose config to run development environment.
API port is 5000 in this case.

## Production start
Run `yarn start` your service will be available at http://[server address]:3000 

## Data import
### Command line import
Right after install you would want to get data imported to the database.
Execute the following command line:
```shell
docker exec -it backend yarn command-nest movies:import
```

### Scheduled import
Import is scheduled to be executed every day at 23:00.
