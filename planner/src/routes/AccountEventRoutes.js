const express = require('express');
const router = express.Router()
const jsonParser = require('../config/Parser')
const {
    getAccountEvents,
    createAccountEvent,
    updateConfirmAccountEvent,
    acceptEvent,
    getAccountEvent, createRecurringAccountEvent
} = require('../service/AccountEventService');
const {handleResponse} = require("../util/ResponseUtil");
const authenticateJWT = require("../middleware/AuthenticationMiddleware");

router
    .get("/", authenticateJWT, async (req, res) => {
        res.send(await getAccountEvents())
    })
    .post("/", jsonParser, authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (command, userId) => await createAccountEvent(command, userId), req.body, req.tokenPayload.userId)
    })
    .put("/", jsonParser, authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (command) => await updateConfirmAccountEvent(command), req.body)
    })
    .get("/:eventId", authenticateJWT, async (req, res) => {
        console.log("userId: " + req.tokenPayload.userId)
        await handleResponse(res, true,
            async (eventId) => await getAccountEvent(eventId), req.params.eventId)
    })
    .post("/recurring", jsonParser, authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (command, userId) => await createRecurringAccountEvent(command, userId), req.body, req.tokenPayload.userId)
    })
    .post("/accept/:eventId", authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (eventId) => await acceptEvent(eventId), req.params.eventId)
    })
    .use("/types", require("./AccountEventTypeRoutes"))

module.exports = router;
