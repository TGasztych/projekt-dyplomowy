const express = require('express');
const router = express.Router()
const jsonParser = require('../config/Parser')
const {
    getAccountEvents,
    createAccountEvent,
    updateConfirmAccountEvent,
    acceptEvent,
    getAccountEvent
} = require('../service/AccountEventService');
const {handleResponse} = require("../util/ResponseUtil");
const authenticateJWT = require("../middleware/AuthenticationMiddleware");

router
    .get("/", authenticateJWT, async (req, res) => {
        res.send(await getAccountEvents())
    })
    .post("/", jsonParser, authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (command) => await createAccountEvent(command), req.body)
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
    .post("/accept/:eventId", authenticateJWT, async (req, res) => {
        await handleResponse(res, true,
            async (eventId) => await acceptEvent(eventId), req.params.eventId)
    })
    .use("/types", require("./AccountEventTypeRoutes"))

module.exports = router;
