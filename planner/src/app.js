const express = require('express')
const app = express()

require('dotenv').config()
const config = require("../config").server;

require("./routes/GlobalRoutes")(app);

app.listen(config.port, () => {
	console.log(`App listening at http://localhost:${config.port}`)
})
