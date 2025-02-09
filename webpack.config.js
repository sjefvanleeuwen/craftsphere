const path = require('path');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const schema = require('./server/graphql/schema');
const resolvers = require('./server/graphql/resolvers');

let apolloServer = null;

module.exports = {
    entry: './public/components.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false // This prevents css-loader from processing URLs
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true
        },
        compress: true,
        port: 4000,
        hot: true,
        open: true,
        historyApiFallback: false, // Disable historyApiFallback completely
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) throw new Error('webpack-dev-server is not defined');
            
            if (!apolloServer) {
                apolloServer = new ApolloServer({
                    typeDefs: schema,
                    resolvers
                });
                
                (async () => {
                    await apolloServer.start();
                    
                    devServer.app.use('/api', 
                        cors(),
                        express.json(),
                        expressMiddleware(apolloServer, {
                            context: async ({ req }) => ({
                                req: {
                                    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                                    headers: req.headers
                                }
                            })
                        })
                    );
                    
                    // Apollo Studio redirect
                    devServer.app.get('/graphql', (_, res) => {
                        res.redirect('https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:4000/api');
                    });
                })();
            }

            // Add SPA handling middleware after webpack middlewares
            middlewares.push({
                name: 'spa-fallback',
                middleware: (req, res, next) => {
                    if (req.path === '/api' || req.path === '/graphql') {
                        next();
                    } else {
                        res.sendFile(path.join(__dirname, 'public/index.html'));
                    }
                }
            });

            return middlewares;
        }
    }
};
