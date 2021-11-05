const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser
} = require("../controller/userController");
const { isAuthenticated, authrizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(forgotPassword);
router.route("/me").get(isAuthenticated, getUserDetails);
router.route("/password/update").put(isAuthenticated, updatePassword);
router.route("/me/update").put(isAuthenticated, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticated, authrizeRoles("admin", getAllUser));
  
router
  .route("admin/user/:id")
  .get(isAuthenticated, authrizeRoles("admin"), getSingleUser)
  .put(isAuthenticated, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticated, authorizeRoles("admin"), deleteUser);

module.exports = router;
