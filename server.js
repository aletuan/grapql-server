// console.log({starting: true});

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The root query',
    fields: {
        user: {
            type: GraphQLString,
            resolve() {
                return 'viewer!';
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: RootQuery
});


const app = express();

app.use('/graphql', graphqlHTTP({schema: Schema}));

app.listen(3000, () => {
    console.log({running: true});
});