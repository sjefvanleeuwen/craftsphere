# Craft Sphere

A web application built with Lit Elements, Vaadin components, and GraphQL.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd craftsphere
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
npm run init-db
```
This will create the SQLite database and add a demo user:
- Username: demo
- Password: demo
- Email: demo@demo.com

## Development

Start the development server:
```bash
npm start
```

This will:
- Start webpack dev server on port 4000
- Enable hot module replacement
- Start GraphQL server
- Open your default browser to http://localhost:4000

## Project Structure

```
craftsphere/
├── public/
│   ├── components/       # Web components
│   ├── pages/           # Page components
│   ├── graphql/         # GraphQL queries and mutations
│   └── vaadin-imports.js # Vaadin component imports
├── server/
│   ├── graphql/         # GraphQL schema and resolvers
│   ├── utils/           # Server utilities
│   └── database.sqlite  # SQLite database
└── webpack.config.js    # Webpack configuration
```

## Features

- User authentication
- CAPTCHA verification
- Real-time form validation
- Hot module replacement
- GraphQL API
- SQLite database

## Technologies

- Lit Elements
- Vaadin Web Components
- GraphQL
- Webpack
- SQLite
- Express

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run init-db` - Initialize database
