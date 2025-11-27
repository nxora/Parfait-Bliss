//auth/routes  canu expalin this code 
const express = require('express')
const router = express.Router()

const { register, login, authMiddleware} = require("./auth")

router.post("/register", register);
router.post("/login", login)

router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Protected route", user: req.user })
})
module.exports = router