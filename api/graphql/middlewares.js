const {makeExecutableSchema} = require("@graphql-tools/schema");
const {readFileSync} = require("fs");

const queries = require('./src/server/queries/queries')
const mutations = require('./src/server/mutations/mutations')


const schema = makeExecutableSchema({
    typeDefs: readFileSync('./graphql/schema.graphql', 'utf8'),
    resolvers: {
        Mutation: {
            addPatient: (_, filters) => mutations.addPatient(filters)
        },
        Query: {
            patients: (_, filters) => queries.getPatients(filters),
        },
        Patient: {
            admin: async (patient) => {
                return await queries.getAdmin({id: patient.id})
            },
            biometrics: async (patient) => {
                return await queries.getBiometrics({id_patient: patient.id})
            },
            biologicalConstant: async (patient) => {
                return await queries.getBiologicalConstant({id_patient: patient.id})
            },
            parameters: async (patient) => {
                return await queries.getParameters({id_patient: patient.id})
            },
            addiction: async (patient) => {
                return await queries.getAddiction({id_patient: patient.id})
            },
        }
    }
});

module.exports = schema
