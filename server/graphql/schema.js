const gql = require('graphql-tag');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
    }

    type Query {
        message: String
        users: [User]
    }

    type Mutation {
        register(input: RegisterInput!): AuthPayload
    }
`;

module.exports = typeDefs;
