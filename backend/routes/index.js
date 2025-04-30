const express = require("express");
const router = express.Router();

const apiRouter = require("./user")
const accRouter = require("./account")
router.use('/user' , apiRouter)
router.use('/account' , accRouter)

module.exports = router;