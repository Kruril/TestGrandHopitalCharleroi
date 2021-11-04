import request, {gql} from "graphql-request";


export function ApiGetPatients() {
    return new Promise((resolve, reject) => {
        const query = gql`
            {
                patients {
                    id
                    admin {
                        firstname
                        lastname
                    }
                }
            }
        `
        request("http://localhost:4001/graphql", query)
            .then( (data) => {
                if (data !== null) {
                    resolve(data)
                } else {
                    reject("Error to get list of patients")
                }
            })
    })
}