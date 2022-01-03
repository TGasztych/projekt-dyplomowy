const {getUsers, createUser} = require('../service/UserService');
const express = require('express');
const jsonParser = require('../config/Parser')
const authenticateJWT = require("../middleware/AuthenticationMiddleware");
const router = express.Router();


router
.post("/", jsonParser, async (req, res) => {
	res.send(await createUser(req.body))
})
.get("/", authenticateJWT, async (req, res) => {
	res.send(await getUsers())
});
module.exports = router;
