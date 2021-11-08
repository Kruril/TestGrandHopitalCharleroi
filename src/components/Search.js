import React, {useEffect, useState} from "react";
import {SearchBar} from "./SearchBar";
import {patientList} from "../services/PatientsServices";

export function Search() {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        if (patients.length === 0) {
            patientList()
                .then((result) => {
                    if (result.success) {
                        setPatients(result.data)
                    }
                })
        }
    })

    return (
        <div className={"float-left w-1/5 h-full p-3 border-2"}>
            <SearchBar patients={patients} />
        </div>
    )
}