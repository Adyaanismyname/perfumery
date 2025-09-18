const express = require("express");
const Router = express.Router();
const {LoginAdmin, verifyOTP} = require("../controllers/admin/adminLoginController")

Router.post("/login-admin", LoginAdmin);
Router.post("/verify-otp", verifyOTP);


module.exports = Router;