export const REGISTER_USER = `
    mutation RegisterUser($username: String!, $email: String!, $password: String!) {
        register(input: {
            username: $username,
            email: $email,
            password: $password
        }) {
            token
            user {
                id
                username
                email
            }
        }
    }
`;
