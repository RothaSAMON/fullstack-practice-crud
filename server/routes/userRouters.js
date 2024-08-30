const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router
  .route("/")
  .get(userControllers.getUsers)
  .post(userControllers.createUser);

router
  .route("/:id")
  .get(userControllers.getOneUser)
  .delete(userControllers.deleteUser)
  .put(userControllers.updateUser);

module.exports = router;
