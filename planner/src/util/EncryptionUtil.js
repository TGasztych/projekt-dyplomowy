const {createHash} = require('crypto');

const encode = text =>
    createHash('sha256').update(text).digest('base64').toString() //TODO bcrypt jak starczy czasu

module.exports = {
    encode
}