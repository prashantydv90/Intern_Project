const express = require("express");
const router = express.Router();
const auth=require("../middleware/authMiddleware")
const {register,login,getProfile,logout} = require("../controller/authController");
router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);
router.post("/logout",logout);

module.exports = router;
