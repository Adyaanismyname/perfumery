const express = require("express");
const Router = express.Router();
const { LoginAdmin, verifyOTP, LogoutAdmin } = require("../controllers/admin/adminLoginController")

Router.post("/login-admin", LoginAdmin);
Router.post("/verify-otp", verifyOTP);
Router.post("/logout", LogoutAdmin);


module.exports = Router;