const server = require("./bin/www");
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

async function waitForDatabase(maxRetries = 5, interval = 2000) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      console.log("Database connection has been established successfully.");
      return true;
    } catch (error) {
      console.error(
        `Unable to connect to the database (attempt ${retries + 1}):`,
        error
      );
      retries++;
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

async function checkConnectionAndUpdateDatabase() {
  try {
    const connected = await waitForDatabase();
    if (!connected) {
      console.error(
        "Failed to connect to the database after multiple attempts."
      );
      return;
    }

    await sequelize.sync({ force: true }); // Dropping the table each time
    console.log("Database synchronized");

    const port = server.address().port;
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);

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
