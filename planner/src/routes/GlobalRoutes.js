const authenticateJWT = require("../middleware/AuthenticationMiddleware");

module.exports = (app) => {
    app.use("/api/account-events/types", authenticateJWT, require("./AccountEventTypeRoutes"))
    app.use("/api/account-events", authenticateJWT, require("./AccountEventRoutes"));
    app.use("/api/users", require("./UserRoutes"));
    app.use("/api/auth", require("./AuthenticationRoutes"));
    app.use("/api/", authenticateJWT, require("./RootRoutes"));
};
