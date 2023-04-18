const express = require("express");
const IndustrialWastewater = require("../models/industrial_wastewater");
const IndustryData = require("../models/industry_data");
const WastewaterTreatmentPlants = require("../models/plants_by_wastewater_treatment_plants_possessed.js");
const WaterWithdrawal = require("../models/water_withdrawal_for_economy.js");
const TotalSulphurDioxideEmission = require("../models/total_sulphur_dioxide_emission.js");
const TotalDustEmission = require("../models/total_dust_emission.js");
const TotalNitrogenOxidesEmission = require("../models/total_nitrogen_oxides_emission.js");

const router = express.Router();

router.get("/industrial-wastewater", async (req, res) => {
  try {
    const data = await IndustrialWastewater.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/industry-data", async (req, res) => {
  try {
    const data = await IndustryData.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/wastewater-treatment-plants", async (req, res) => {
  try {
    const data = await WastewaterTreatmentPlants.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/wastewater-withdrawal", async (req, res) => {
  try {
    const data = await WaterWithdrawal.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/sulphur-dioxide", async (req, res) => {
  try {
    const data = await TotalSulphurDioxideEmission.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/dust", async (req, res) => {
  try {
    const data = await TotalDustEmission.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/nitrogen-oxides", async (req, res) => {
  try {
    const data = await TotalNitrogenOxidesEmission.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
