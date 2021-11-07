import {ApiGetPatients} from "./ApiService";
let patients = undefined

function getPatients() {
    return ApiGetPatients()
        .then( (data) => {
            return {success: true, data: data.patients, message: ""}
        })
        .catch(reason => {
            return {success: false, data: null, message: reason}
        })
}

export function patientList() {
    if (patients === undefined) {
        patients = getPatients()
    }

    return patients
}