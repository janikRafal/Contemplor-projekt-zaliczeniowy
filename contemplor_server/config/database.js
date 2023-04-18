const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("contemplor-db", "postgres", "postgres", {
  host: "postgres",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
