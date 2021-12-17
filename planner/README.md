# Planner

##Configure

Add `.env` in project root and add following properties

`DB_USERNAME`=(your db user username)

`DB_PASSWORD`=(your db user password)

To install dependencies use `npm install`

You can use `docker-compose.yml` file for dependencies like mysql with `docker-compose up` in docker folder

Remember that there are also needed following env variables:

`MYSQL_ROOT_PASSWORD`=(mysql root user password)

##Migration

install sequelize-cli globally (or install locally and use command below from binary in node-modules)

`npm install -g sequelize-cli`

then run `sequelize db:migrate` in project root

##Run

To run use `npm run start`
