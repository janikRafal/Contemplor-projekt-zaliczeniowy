const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WastewaterTreatmentPlants = sequelize.define(
  "WastewaterTreatmentPlants",
  {
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
  }
);

WastewaterTreatmentPlants.loadData = function () {
  const filePath = path.join(
    __dirname,
    "..",
    "data",
    "plants_by_wastewater_treatment_plants_possessed.json"
  );
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

WastewaterTreatmentPlants.saveData = async function (data) {
  for (const item of data) {
    await WastewaterTreatmentPlants.create(item);
  }
};

module.exports = WastewaterTreatmentPlants;
