import {SearchResult} from "./SearchResult";
import {useState} from "react";
import {SelectedView} from "./SelectedView";


export function SearchBar(props) {
    const [result, setResult] = useState("")
    const [inputValue, setInputValue]= useState("")
    let patients = []

    for (let patient of props.patients) {
        if (patient.selected) {
            patients.push(
                <SelectedView patient={patient} key={patient.id}/>
            )

        }
    }

    return (
        <div className="container h-auto flex flex-col justify-center rounded">
            <div className="relative w-full flex-1">
                <input type="text"
                       className="w-full h-14 pl-3 pr-8 rounded z-0 focus:outline-none shadow-lg bg-gray-200"
                       placeholder="Patient ..." onChange={(result) => {
                    setResult(result.target.value);
                    setInputValue(result.target.value)
                }} value={inputValue}/>
            </div>
            <SearchResult patients={props.patients} result={result} update={props.update}/>
            {patients}

        </div>
    )
}