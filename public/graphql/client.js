export async function gqlRequest(query, variables = {}) {
    try {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        const json = await response.json();

        if (json.errors) {
            throw new Error(json.errors[0].message);
        }

        return json.data;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw error;
    }
}
