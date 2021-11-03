const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./middlewares")
const {addData} = require("./src/insertData");



const app = express();
app.use('/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));
app.listen(4000,() => {
    console.log('API Run on port 4001')
    addData()
});