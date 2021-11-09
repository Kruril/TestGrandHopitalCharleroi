import {ApiGetPatient, ApiGetPatients} from "./ApiService";
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

export function getPatientInfo(id) {
    return ApiGetPatient(id)
        .then( (data) => {
            return {success: true, data: data.patients[0], message: ""}
        })
        .catch(reason => {
            return {success: false, data: null, message: reason}
        })
}