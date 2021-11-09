import {ApiGetPatient, ApiGetPatients} from "./ApiService";

let patients = undefined

/**
 * Get all patients
 * @returns {Promise<{data: *, success: boolean, message: string} | {data: null, success: boolean, message: *}>}
 */
function getPatients() {
    return ApiGetPatients()
        .then( (data) => {
            return {success: true, data: data.patients, message: ""}
        })
        .catch(reason => {
            return {success: false, data: null, message: reason}
        })
}

/**
 * Return all patients
 * @returns {*}
 */
export function patientList() {
    if (patients === undefined) {
        patients = getPatients()
    }

    return patients
}


/**
 * Return all information for specific patient
 * @param id
 * @returns {Promise<{data: *, success: boolean, message: string} | {data: null, success: boolean, message: *}>}
 */
export function getPatientInfo(id) {
    return ApiGetPatient(id)
        .then( (data) => {
            return {success: true, data: data.patients[0], message: ""}
        })
        .catch(reason => {
            return {success: false, data: null, message: reason}
        })
}