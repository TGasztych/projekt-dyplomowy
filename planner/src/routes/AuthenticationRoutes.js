const express = require('express');
const jsonParser = require('../config/Parser')
const {login, refresh} = require("../service/AutenticationService");
const {handleResponse} = require("../util/ResponseUtil");
const router = express.Router();

router
    .post("/", jsonParser, async (req, res) => {
        await handleResponse(res, true, async (command) => await login(command), req.body)
    })
    .post("/refresh", jsonParser, async (req, res) => {
        await handleResponse(res, true, async (accessToken) => await refresh(accessToken), req.body)
    });
module.exports = router;
