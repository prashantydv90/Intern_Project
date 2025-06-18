const express = require("express");
const router = express.Router();

const auth = require("../middleware/authmiddleware");
const { register, login, getProfile, logout } = require("../controller/authcontroller");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);
router.post("/logout",logout);

module.exports = router;
