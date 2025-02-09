const messageQuery = require('./message');
const usersQuery = require('./users');
const { captchaQuery, captchas } = require('./captcha');
const logsQuery = require('./logs');

const queryResolvers = {
    ...messageQuery,
    ...usersQuery,
    ...captchaQuery,
    ...logsQuery
};

module.exports = { queryResolvers, captchas };
