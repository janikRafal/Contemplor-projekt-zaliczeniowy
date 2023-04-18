const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WaterWithdrawal = sequelize.define("WaterWithdrawal", {
  specification: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  2000: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2005: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2010: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2015: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2020: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2021: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

WaterWithdrawal.loadData = function () {
  const filePath = path.join(
    __dirname,
    "..",
    "data",
    "water_withdrawal_for_economy.json"
  );
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

WaterWithdrawal.saveData = async function (data) {
  for (const item of data) {
    await WaterWithdrawal.create(item);
  }
};

module.exports = WaterWithdrawal;
