const path = require("path");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TotalSulphurDioxideEmission = sequelize.define(
  "TotalSulphurDioxideEmission",
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
    2019: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    2020: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }
);

TotalSulphurDioxideEmission.loadData = function () {
  const filePath = path.join(__dirname, "..", "data", "total_emission.json");
  const data = fs.readFileSync(filePath);
  const jsonData = JSON.parse(data);

  return jsonData["DWUTLENEK_SIARKI"];
};

TotalSulphurDioxideEmission.saveData = async function (data) {
  for (const item of data) {
    await TotalSulphurDioxideEmission.create(item);
  }
};

module.exports = TotalSulphurDioxideEmission;
