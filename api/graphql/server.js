const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./middlewares")
const {addData} = require("./src/insertData");
const cors = require('cors')



const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options = cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options))
app.use('/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));
app.listen(4000,() => {
    console.log('API Run on port 4001')
    addData()
});