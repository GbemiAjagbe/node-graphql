const express = require ('express');
const {graphqlHTTP} = require ('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' })

connectDB()

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true    
}))

app.listen(4000, () => console.log ('App running'))
