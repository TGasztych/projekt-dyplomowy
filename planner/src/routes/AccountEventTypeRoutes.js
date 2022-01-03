const express = require('express');
const jsonParser = require('../config/Parser')
const {getAccountEventTypes, createAccountEventType} = require('../service/AccountEventTypeService');
const {handleResponse} = require("../util/ResponseUtil");
const router = express.Router();

router
    .get("/", async (req, res) => {
        await handleResponse(res, true,
            async (userId) => await getAccountEventTypes(userId), req.tokenPayload.userId)
    })
    .post("/", jsonParser, async (req, res) => {
        await handleResponse(res, true,
            async (command, userId) => await createAccountEventType(command, userId), req.body, req.tokenPayload.userId)
    });

module.exports = router;
