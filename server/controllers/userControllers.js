const { where } = require("sequelize");
const User = require("../models/User");
const { use } = require("../routes/userRouters");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll(); //This method is show all the users
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const user = req.body; //await User.create(req.body); //This method is create the user
  const existUser = await User.findOne({
    where: {
      email: user.email,
    },
  });
  if (existUser) {
    return next(new AppError("User already exist!!!", 400));
  }

  const newUser = await User.create(user);

  res.status(200).json({
    status: "success",
    data: {
      name : newUser.name,
      email : newUser.email,
    },
  });
});

exports.getOneUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id); //Use findByPk just recive the ID

  if (!user) {
    return next(new AppError("There is no user with this ID!!!", 400));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  //This find if the user in the database or not
  if (!user) {
    return next(
      new AppError("Cant delete!!! There is no user with this ID!!!", 404)
    );
  }

  //This delete the user
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  //Then response the message
  return res.status(204).json({
    status: "success",
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id); //Old data not yet update

  // Check if have ID?
  if (!user) {
    return next(
      new AppError("Can't Update!! There no user with this ID!", 404)
    );
  }

  //Check if it input??
  if (Object.keys(req.body).length === 0) {
    return next(new AppError("Please input your data!!", 401));
  }
  //Updating : ...
  await User.update(req.body, {
    where: { id },
    validate: true,
  });

  const updatedUser = await User.findByPk(id); // Data after updated

  return res.status(201).json({
    status: "success",
    updatedUser,
  });
});
