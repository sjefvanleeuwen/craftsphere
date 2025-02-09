export const REGISTER_USER = `
    mutation RegisterUser($username: String!, $email: String!, $password: String!, $captchaId: String!, $captchaAnswer: String!) {
        register(input: {
            username: $username,
            email: $email,
            password: $password,
            captchaId: $captchaId,
            captchaAnswer: $captchaAnswer
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

export const GENERATE_CAPTCHA = `
    query GenerateCaptcha {
        generateCaptcha {
            id
            image
        }
    }
`;
