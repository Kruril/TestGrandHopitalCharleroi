const knex = require('../connection');

function addPatient(filters) {
    // console.log(filters.patient)
    return knex
        .from('patient')
        .insert({
            id: filters.patient.id,
            firstname: filters.patient.firstname,
            lastname: filters.patient.lastname,
            birth: filters.patient.birth,
            gender: filters.patient.gender
        })
        .then(_ => {
            return knex
                .into('biometrics')
                .insert({
                    id_patient: filters.patient.id,
                    weight: filters.patient.weight,
                    size: filters.patient.size
                })
                .then(_ => {
                    return knex
                        .into('biological_constant')
                        .insert({
                            id_patient: filters.patient.id,
                            hba1c: filters.patient.hba1c,
                            total_cholesterol: filters.patient.total_cholesterol,
                            cholesterol_hdl: filters.patient.cholesterol_hdl,
                        })
                        .then(_ => {
                            return knex
                                .into('parameters')
                                .insert({
                                    id_patient: filters.patient.id,
                                    pss: filters.patient.pss,
                                })
                                .then(_ => {
                                    return knex
                                        .into('addiction')
                                        .insert({
                                            id_patient: filters.patient.id,
                                            tobacco_consumption: filters.patient.tobacco_consumption,
                                        })
                                        .then( _ => {
                                            return true
                                        })
                                })
                        })
                })
        })
        .catch(_ => {
            return false
        } )
}

module.exports = {
    addPatient
}