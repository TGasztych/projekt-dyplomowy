const {getUsers, createUser} = require('../service/UserService');
const express = require('express');
const jsonParser = require('../config/Parser')
const router = express.Router();

router
.get("/", async (req, res) => {
	res.send(await getUsers())
})
.post("/", jsonParser, async (req, res) => {
	res.send(await createUser(req.body))
});
module.exports = router;
