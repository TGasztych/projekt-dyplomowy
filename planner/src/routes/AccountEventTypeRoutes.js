const express = require('express');
const jsonParser = require('../config/Parser')
const {getAccountEventTypes, createAccountEventType} = require('../service/AccountEventTypeService');
const router = express.Router();

router
.get("/", async (req, res) => {
	res.send(await getAccountEventTypes())
})
.post("/", jsonParser, async (req, res) => {
	res.send(await createAccountEventType(req.body))
});
module.exports = router;
