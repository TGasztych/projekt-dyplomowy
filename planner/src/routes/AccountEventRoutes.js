const express = require('express');
const router = express.Router()
const jsonParser = require('../config/Parser')
const {
    getAccountEvents,
    createAccountEvent,
    acceptEvent,
    getAccountEvent, createRecurringAccountEvent
} = require('../service/AccountEventService');
const {handleResponse} = require("../util/ResponseUtil");

router
    .get("/", async (req, res) => {
        await handleResponse(res, true,
            async (userId) => await getAccountEvents(userId), req.tokenPayload.userId)
    })
    .post("/", jsonParser, async (req, res) => {
        await handleResponse(res, true,
            async (command, userId) => await createAccountEvent(command, userId), req.body, req.tokenPayload.userId)
    })
    .get("/:eventId", async (req, res) => {
        await handleResponse(res, true,
            async (eventId) => await getAccountEvent(eventId), req.params.eventId)
    })
    .post("/recurring", jsonParser, async (req, res) => {
        await handleResponse(res, true,
            async (command, userId) => await createRecurringAccountEvent(command, userId), req.body, req.tokenPayload.userId)
    })
    .post("/accept/:eventId", async (req, res) => {
        await handleResponse(res, true,
            async (eventId) => await acceptEvent(eventId), req.params.eventId)
    })

module.exports = router;
