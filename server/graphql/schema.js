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

    type Captcha {
        id: ID!
        image: String!
    }

    type Log {
        id: ID!
        eventType: String!
        eventClass: String!
        eventResult: String!
        eventMessage: String!
        userId: ID
        createdAt: String!
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
        captchaId: String!
        captchaAnswer: String!
    }

    input LoginInput {
        username: String!
        password: String!
    }

    type Query {
        message: String
        users: [User]
        generateCaptcha: Captcha!
        logs(limit: Int, offset: Int): [Log!]!
    }

    type Mutation {
        register(input: RegisterInput!): AuthPayload
        login(input: LoginInput!): AuthPayload
    }
`;

module.exports = typeDefs;
