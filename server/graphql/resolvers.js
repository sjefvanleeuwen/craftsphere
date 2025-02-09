const connectDB = require('../sql-lite-schema/db');
const { queryResolvers } = require('./resolvers/queries');
const { mutationResolvers } = require('./resolvers/mutations');

const resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers
};

module.exports = resolvers;
