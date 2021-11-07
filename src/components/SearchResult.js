import {PatientSelect} from "./PatientSelect";
import {useState} from "react";

export function SearchResult(props) {
    const [count, setCount] = useState(0)
    let match = []
    if (props.result.length > 0) {
        props.patients.forEach(function (item) {
            if (item.admin.firstname.toUpperCase().includes(props.result.toUpperCase()) ||
                item.admin.lastname.toUpperCase().includes(props.result.toUpperCase())) {
                item.selected = item.selected === undefined ? false : item.selected
                match.push(item)
            }
        })
    }

    let displayMatch = []

    function add(id) {
        props.patients.forEach(function (item, index, object) {
            if (item.id === id) {
                item.selected = !item.selected
                object[index] = item
            }
        })

        isEnough()
    }

    function isEnough() {
        let tmp = []
        props.patients.forEach(function (item) {
            if (item.selected) {
                tmp.push(item)
            }
        })
        setCount(tmp.length)
    }

    for (let m of match) {
        displayMatch.push(
            <PatientSelect patient={m} key={m.id} idSelect={(id) => add(id)}
                            enough={count >= 4 && !m.selected? "pointer-events-none" : ""} />
        )
    }

    return (
        <div className={"z-40"}>
            {displayMatch}
        </div>
    )
}