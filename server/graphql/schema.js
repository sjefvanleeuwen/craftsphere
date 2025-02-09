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

    input RegisterInput {
        username: String!
        email: String!
        password: String!
        captchaId: String!
        captchaAnswer: String!
    }

    type Query {
        message: String
        users: [User]
        generateCaptcha: Captcha!
    }

    type Mutation {
        register(input: RegisterInput!): AuthPayload
    }
`;

module.exports = typeDefs;
