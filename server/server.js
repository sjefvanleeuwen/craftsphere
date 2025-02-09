const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

const PORT = 4001;  // Different port from webpack dev server
app.listen(PORT, () => {
    console.log(`GraphQL server running on port ${PORT}`);
});
