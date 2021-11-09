import Icon from "@mdi/react";
import {mdiCheckCircle, mdiCheckCircleOutline} from "@mdi/js";
import {useState} from "react";


/**
 * Return div with onClick event to select a patient
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function PatientSelect(props) {
    const [selected, setSelected] = useState(props.patient.selected);

    function isSelected() {
        setSelected(!selected)
        props.idSelect(props.patient.id)
    }

    return (
        <div key={props.patient.id} className={"shadow flow-root p-3 cursor-pointer " + props.enough} onClick={isSelected}>
            {props.patient.admin.lastname} {props.patient.admin.firstname}
            <Icon path={selected ? mdiCheckCircle : mdiCheckCircleOutline} size={1}
                  className={"float-right"}/>

        </div>
    )
}