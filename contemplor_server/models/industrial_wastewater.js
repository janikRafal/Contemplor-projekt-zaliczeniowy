const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const IndustrialWastewater = sequelize.define("IndustrialWastewater", {
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

IndustrialWastewater.loadData = function () {
  const filePath = path.join(
    __dirname,
    "..",
    "data",
    "industrial_wastewater.json"
  );
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

IndustrialWastewater.saveData = async function (data) {
  for (const item of data) {
    await IndustrialWastewater.create(item);
  }
};

module.exports = IndustrialWastewater;
