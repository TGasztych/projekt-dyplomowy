module.exports = (app) => {
    app.use("/api/", require("./RootRoutes"));
    app.use("/api/users", require("./UserRoutes"));
    app.use("/api/account-events", require("./AccountEventRoutes"));
    app.use("/api/auth", require("./AuthenticationRoutes"));
};
