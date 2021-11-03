const knex = require('../connection');


function getPatients(filters) {

    return knex
        .queryBuilder()
        .select('*')
        .where(filters.targetId !== undefined ? {id: filters.targetId} : filters)
        .from('patient');
}

function getAdmin(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('patient')
        .first()
}

function getBiometrics(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('biometrics')
        .first()
}

function getBiologicalConstant(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('biological_constant')
        .first()
}

function getParameters(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('parameters')
        .first()
}

function getAddiction(filters) {
    return knex
        .queryBuilder()
        .select('*')
        .where(filters)
        .from('addiction')
        .first()
}

module.exports = {
    getPatients,
    getAdmin,
    getBiometrics,
    getBiologicalConstant,
    getParameters,
    getAddiction
}