const jwt = require("jsonwebtoken");
const authConfig = require('../../config').auth

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization; // pobranie wartosci headera 'Authorization' (jest on w postaci 'Bearer accessToken')

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, authConfig.accessTokenSecret, (err, tokenPayload) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.tokenPayload = tokenPayload;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT