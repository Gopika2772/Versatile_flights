const express = require("express");
const { register, login } = require("../controllers/admin.auth.contollers");

const router = express.Router();

router.get("/login", login);
router.post("/register", register);

export default router;