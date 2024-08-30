const express = require("express");
const userRoute = require("./routes/userRouters");
const globalHandleError = require("./controllers/errorControllers");
const cors = require('cors')
// const cors = require('cors'); // Import CORS middleware

const app = express();

// // Use CORS middleware
// app.use(cors());

//This use for read json foramt
app.use(express.json());
app.use(cors())

// This for the route
app.use("/api/v1/users", userRoute);

// Catch error when it doesnt know the API or HTTP methods
// app.all('*', (req, res, next) => {
//   next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
// });
app.use(globalHandleError);

module.exports = app;
