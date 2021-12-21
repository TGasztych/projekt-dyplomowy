const {getUserByCredentials} = require("./UserService");
const jwt = require('jsonwebtoken');
const {encode} = require("../util/EncryptionUtil");
const authConfig = require('../../config').auth

const login = async (command) => {
    const {username, password} = command;
    const encodedPassword = encode(password)      //czyli to daje w save w create user
    console.log(encodedPassword)    //TODO wklejac to w baze zamiast hasła (zahashowane hasło zamiast plain textu)
    const user = await getUserByCredentials(username, encodedPassword);

    if (user) {
        const accessToken = jwt.sign({userId: user.id, role: "USER"}, authConfig.accessTokenSecret, {expiresIn: '20m'});
        const refreshToken = jwt.sign({userId: user.id, role: "USER"}, authConfig.refreshTokenSecret);
        return {
            accessToken,
            refreshToken
        };
    }
}

const refresh = async (refreshToken) => {
    return refreshToken ? await getAccessToken(refreshToken) : (() => {throw new Error("Refresh token not found.")})()
}

const getAccessToken = async (refreshToken) => new Promise((resolve, reject) => {
    jwt.verify(refreshToken, authConfig.refreshTokenSecret, (err, tokenPayload) => {
        if (err) {
            reject(err);
        }
        resolve(tokenPayload);
    });
})

module.exports = {
    login,
    refresh
}