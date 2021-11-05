const express = require("express");

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getProductReviews,
  deleteReview,
  createProductReview
} = require("../controller/productController");
const { isAuthenticated, authrizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticated, authrizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticated, authrizeRoles("admin"), updateProduct)
  .delete(isAuthenticated, authrizeRoles("admin"), deleteProduct)
  
router.route("/product/:id").get(getProductDetails);

router.route("review").put(isAuthenticated,createProductReview)

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticated, deleteReview);

module.exports = router;
