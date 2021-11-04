import {PatientSelect} from "./PatientSelect";

export function SearchResult(props) {
    let match = []
    if (props.result.length > 0) {
        props.patients.forEach(function (item, index, object) {
            if (item.admin.firstname.toUpperCase().includes(props.result.toUpperCase()) ||
                item.admin.lastname.toUpperCase().includes(props.result.toUpperCase())) {
                match.push(item)
            }
        })
    }

    let displayMatch = []

    for (let m of match) {
        displayMatch.push(
            <PatientSelect patient={m} key={m.id} input={(blank) => props.input(blank)}/>
        )
    }

    return (
        <div>
            {displayMatch}
        </div>
    )
}