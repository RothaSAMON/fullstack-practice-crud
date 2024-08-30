const app = require("./app");
// const express = require("express");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
// const userRoute = require("./routes/userRouters");

//This call the .env file
dotenv.config(".env");
console.log(process.env.NODE_ENV);

// Sync models with database
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false, logging: false });
    console.log("Database synced successfully!🎉");
  } catch (error) {
    console.log("Database synced failed!💥", error);
    process.exit(1); // Exit if database sync fails
  }
};
syncDB();

// Catch error when it doesnt know the API or HTTP methods
// app.all('*', (req, res, next) => {
//   next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
// });

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🏃‍♂️🏃‍♂️🏃‍♂️`);
});
