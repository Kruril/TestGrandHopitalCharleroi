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


export function ApiGetPatient(id) {
    return new Promise((resolve, reject) => {
        const query = gql`
            {
                patients(targetId: ${id}) {
                    id
                    admin {
                        firstname
                        lastname
                        birth
                        gender
                    }
                    biologicalConstant {
                        cholesterol_hdl
                        hba1c
                        total_cholesterol
                    }
                    biometrics {
                        size
                        weight
                    }
                    parameters {
                        pss
                    }
                    addiction {
                        tobacco_consumption
                    }
                }
            }
        `
        request("http://localhost:4001/graphql", query)
            .then( (data) => {
                if (data !== null) {
                    resolve(data)
                } else {
                    reject("Error to get patient with id : " + id)
                }
            })
    })
}