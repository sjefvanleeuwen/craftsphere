const registerMutation = require('./register');
const loginMutation = require('./login');

const mutationResolvers = {
    ...registerMutation,
    ...loginMutation
};

module.exports = { mutationResolvers };
