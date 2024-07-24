"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
// Register a new user
router.post("/register", user_controller_1.register);
// Login
router.post("/login", passport_1.default.authenticate("local"), (req, res) => {
    res.json({ message: "Logged in successfully" });
});
exports.default = router;
