const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userModel");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  let { token } = req.cookies;
  console.log(token);

  if (!token)
    return next(new ErrorHandler("Please Login to access this resource", 401));
  console.log(token);
  const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
  console.log("decodedata => ", decodedData);
  req.user = await User.findById(decodedData.id);

  next();
});

exports.authrizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      new ErrorHandler(
        `Role : ${req.user.role} is not allowed to access this resource`,403
      );
    }

    next();
  };
};
