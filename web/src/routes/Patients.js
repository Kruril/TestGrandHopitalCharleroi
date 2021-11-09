import {GraphsView} from "../components/GraphsView";
import {Search} from "../components/Search";
import {patientList} from "../services/PatientsServices";
import {useEffect, useState} from "react";

/**
 * Patients view
 * Search and Graphics
 * @returns {JSX.Element}
 * @constructor
 */
export function Patients() {
    const [patients, setPatients] = useState([])
    const [graphs, setGraphs] = useState(<GraphsView patients={patients}/>)

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
        <div className={"flow-root h-full"}>
            <Search patients={patients} update={() => setGraphs(<GraphsView patients={patients}/>)}/>
            {graphs}
        </div>
    )
}
