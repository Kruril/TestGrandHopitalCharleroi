import Icon from "@mdi/react";
import {mdiCheckCircle, mdiCheckCircleOutline} from "@mdi/js";
import {useState} from "react";

export function PatientSelect(props) {
    const [selected, setSelected] = useState(false);

    function isSelected() {
        setSelected(!selected)
        console.log(props.input)
        props.input("")
    }

    return (
        <div key={props.patient.id} className={"shadow flow-root p-3 cursor-pointer"} onClick={isSelected}>
            {props.patient.admin.lastname} {props.patient.admin.firstname}
            <Icon path={selected? mdiCheckCircle : mdiCheckCircleOutline} size={1}
                  className={"float-right"}/>

        </div>
    )
}