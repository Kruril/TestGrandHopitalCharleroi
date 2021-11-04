const {makeExecutableSchema} = require("@graphql-tools/schema");
const {readFileSync} = require("fs");

const queries = require('./src/server/queries/queries')
const mutations = require('./src/server/mutations/mutations')

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    },
});


const schema = makeExecutableSchema({
    typeDefs: readFileSync('./graphql/schema.graphql', 'utf8'),
    resolvers: {
        Date: dateScalar,
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
