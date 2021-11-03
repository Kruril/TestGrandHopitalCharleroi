const {readFileSync} = require("fs");
const dataJson = readFileSync('./src/MOCK_DATA.json', 'utf8')
const data = JSON.parse(dataJson)
const axios = require("axios")


function addData() {
    for (const raw_patient of data) {
        const patient = {
            id: raw_patient.id,
            firstname: raw_patient.admin.prenom,
            lastname: raw_patient.admin.nom,
            birth: raw_patient.admin.date_de_naissance,
            gender: raw_patient.admin.Genre,
            weight: raw_patient.biometrie.poids,
            size: raw_patient.biometrie.taille,
            hba1c: raw_patient.const_biologique.HbA1c,
            total_cholesterol: raw_patient.const_biologique.Cholesterol_total,
            cholesterol_hdl: raw_patient.const_biologique.Cholesterol_HDL,
            pss: raw_patient.parametres.PSS,
            tobacco_consumption: raw_patient.assuetudes.Consommation_tabagique
        }
        axios({
            url: '/graphql',
            proxy: {
                host: process.env.DB_HOST,
                port: 4001
            },
            method: 'post',
            data: {
                query: `
                    mutation addPatient($patient: PatientDatas) {
                        addPatient(patient: $patient)
                    }
                `,
                variables: {
                    patient: patient
                }
            }
        }).then();
    }
}

module.exports = {
    addData
}
