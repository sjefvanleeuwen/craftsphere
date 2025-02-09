export async function gqlRequest(query, variables = {}) {
    try {
        console.log('GraphQL request:', { query, variables });
        
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

        if (!response.ok) {
            console.error('Network response not ok:', response.status, response.statusText);
            throw new Error('Network response was not ok');
        }

        const json = await response.json();
        console.log('GraphQL response:', json);

        if (json.errors) {
            console.error('GraphQL errors:', json.errors);
            throw new Error(json.errors[0].message);
        }

        return json.data;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw error;
    }
}
