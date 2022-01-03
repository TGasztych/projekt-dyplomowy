const {getUserByCredentials} = require("./UserService");
const jwt = require('jsonwebtoken');
const {encode} = require("../util/EncryptionUtil");
const authConfig = require('../../config').auth

const login = async (command) => {
    const {username, password} = command;
    const encodedPassword = encode(password)      //używane do create user
    console.log(encodedPassword)    //zahashowane hasło
    const user = await getUserByCredentials(username, encodedPassword);

    if (user) {
        const accessToken = jwt.sign({userId: user.id, role: "USER"}, authConfig.accessTokenSecret, {expiresIn: '1m'});
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
    jwt.verify(refreshToken, authConfig.refreshTokenSecret, (err, userData) => {
        if (err) {
            reject(err);
        }
        const accessToken = jwt.sign({userId: userData.userId, role: userData.role}, authConfig.accessTokenSecret, {expiresIn: '1m'});
        resolve({
            accessToken,
            refreshToken
        });
    });
})

module.exports = {
    login,
    refresh
}