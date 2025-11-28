//auth/routes  
const express = require('express')
const router = express.Router()

const { register, login, authMiddleware, verifyEmail, googleAuth} = require("./auth")

router.post("/register", register);
router.post("/login", login)
router.get("/verify/:token", verifyEmail)
router.post("/google", googleAuth)
 
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Protected route", user: req.user })
})

// In auth/routes.js
router.get("/test", (req, res) => {
  res.json({ ok: true });
});
module.exports = router