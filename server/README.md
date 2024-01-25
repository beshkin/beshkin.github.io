# Server

Backend is developed using NestJS with MySQL database communication

## Data import
### Command line import
Right after install you would want to get data imported to the database.
Execute the following command line:
```shell
docker exec -it backend yarn command-nest movies:import
```

### Scheduled import
Import is scheduled to be executed every day at 23:00.
