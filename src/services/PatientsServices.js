import {ApiGetPatients} from "./ApiService";


export function getPatients(callback) {
    ApiGetPatients()
        .then( (data) => {
            callback({success: true, data: data.patients, message: ""})
        })
        .catch(reason => {
            callback({success: false, data: null, message: reason})
        })
}