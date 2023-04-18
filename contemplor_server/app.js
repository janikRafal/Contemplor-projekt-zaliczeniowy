var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const sequelize = require("./config/database.js");

const IndustryData = require("./models/industry_data");
const IndustrialWastewater = require("./models/industrial_wastewater.js");
const WastewaterTreatmentPlants = require("./models/plants_by_wastewater_treatment_plants_possessed.js");
const WaterWithdrawal = require("./models/water_withdrawal_for_economy.js");
const TotalSulphurDioxideEmission = require("./models/total_sulphur_dioxide_emission.js");
const TotalDustEmission = require("./models/total_dust_emission.js");
const TotalNitrogenOxidesEmission = require("./models/total_nitrogen_oxides_emission.js");

const apiRoutes = require("./routes/apiRoutes");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

async function checkConnectionAndUpdateDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync({ force: true }); // Dropping the table each time
    console.log("Database synchronized");

    const data1 = IndustryData.loadData();
    await IndustryData.saveData(data1);
    const data2 = IndustrialWastewater.loadData();
    await IndustrialWastewater.saveData(data2);
    const data3 = WastewaterTreatmentPlants.loadData();
    await WastewaterTreatmentPlants.saveData(data3);
    const data4 = WaterWithdrawal.loadData();
    await WaterWithdrawal.saveData(data4);
    const data5 = TotalSulphurDioxideEmission.loadData();
    await TotalSulphurDioxideEmission.saveData(data5);
    const data6 = TotalDustEmission.loadData();
    await TotalDustEmission.saveData(data6);
    const data7 = TotalNitrogenOxidesEmission.loadData();
    await TotalNitrogenOxidesEmission.saveData(data7);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
checkConnectionAndUpdateDatabase();

module.exports = app;
