import Icon from "@mdi/react";
import {mdiMagnify} from "@mdi/js";
import {SearchResult} from "./SearchResult";
import {useState} from "react";


export function SearchBar(props) {
    const [result, setResult] = useState("")
    const [inputValue, setInputValue]= useState("")
    return (
        <div className="container h-auto flex flex-col justify-center rounded">
            <div className="relative w-full flex-1">
                <input type="text"
                       className="w-full h-14 pl-3 pr-8 rounded z-0 focus:outline-none shadow-lg bg-gray-200"
                       placeholder="Patient ..." onChange={(result) => {setResult(result.target.value); setInputValue(result.target.value)}} value={inputValue}/>
                <div className="absolute top-4 right-3">
                    <Icon path={mdiMagnify} size={1} onClick={() => console.log("salut")}/>
                </div>
            </div>
            <SearchResult patients={props.patients} result={result} input={(input) => {setResult(input); setInputValue(input)}}/>
        </div>
    )
}