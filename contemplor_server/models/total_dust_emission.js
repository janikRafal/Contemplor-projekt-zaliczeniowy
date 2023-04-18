const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TotalDustEmission = sequelize.define("TotalDustEmission", {
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
  2019: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  2020: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

TotalDustEmission.loadData = function () {
  const filePath = path.join(__dirname, "..", "data", "total_emission.json");
  const data = fs.readFileSync(filePath);
  const jsonData = JSON.parse(data);

  return jsonData["PYŁY"];
};

TotalDustEmission.saveData = async function (data) {
  for (const item of data) {
    await TotalDustEmission.create(item);
  }
};

module.exports = TotalDustEmission;
