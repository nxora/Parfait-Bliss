//auth/routes  canu expalin this code 
const express = require('express')
const router = express.Router()

const { register, login, authMiddleware} = require("./auth")

router.post("/register", register);
router.post("/login", login)

router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Protected route", user: req.user })
})

// In auth/routes.js
router.get("/test", (req, res) => {
  res.json({ ok: true });
});
module.exports = router