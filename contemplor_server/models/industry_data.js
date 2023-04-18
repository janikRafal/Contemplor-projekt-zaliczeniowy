const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const IndustryData = sequelize.define("IndustryData", {
  specification: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  1980: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  1985: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  1990: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  1995: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2000: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2005: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2006: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2007: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2008: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2009: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2010: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2011: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2012: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2013: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2014: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2015: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2016: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2017: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2018: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2019: {
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

IndustryData.loadData = function () {
  const filePath = path.join(__dirname, "..", "data", "industry_data.json");
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

IndustryData.saveData = async function (data) {
  for (const item of data) {
    await IndustryData.create(item);
  }
};

module.exports = IndustryData;
