// EXAMPLE GET REQUEST
const axios = require("axios");


axios({
    url: '/graphql',
    proxy: {
        host: process.env.DB_HOST,
        port: 4001
    },
    method: 'post',
    data: {
        query: `
                query {
                    patients {
                        id
                        admin {
                            firstname
                            lastname
                        }
                    }
                }
            `,
        variables: {
            id: 1
        }
    },
}).then( result => {
    console.log(result.data.data.patients[0].id)
})