import Icon from "@mdi/react";
import {mdiChevronDown, mdiChevronUp} from "@mdi/js";
import {useEffect, useState} from "react";
import {getPatientInfo} from "../services/PatientsServices";
import {DropDown} from "./DropDown";
import {Title} from "../utils/Title";

export function SelectedView(props) {
    const [open, isOpen] = useState(false)
    const [patient, setPatient] = useState(undefined)
    let contents = []

    useEffect(() => {
        if (patient === undefined) {
            getPatientInfo(props.patient.id)
                .then(result => {
                    if (result.success) {
                        console.log(result.data)
                        setPatient(result.data)
                    }
                })
                .catch(reason => {
                    console.log(reason)
                })
        }
    })

    if (patient === undefined) {
        return (
            <div>
                Loading ...
            </div>
        )
    } else {
        for (let subCategory in patient) {
            if (subCategory !== "id") {
                contents.push(
                    <DropDown key={subCategory} open={open} content={patient[subCategory]} title={Title[subCategory]} />
                )
            }
        }
    }
    return (
        <div className={"z-0 pt-3 px-3"}>
            <div className={"cursor-pointer select-none"} onClick={() => isOpen(!open)}>
                {patient.admin.firstname + " " + patient.admin.lastname}
                <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} className={"float-right"}/>
            </div>
            {/*<DropDown open={open} patient={patient} title={"Biométries"}/>*/}
            {contents}
        </div>
    )
}