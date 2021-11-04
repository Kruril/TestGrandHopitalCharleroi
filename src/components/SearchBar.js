import Icon from "@mdi/react";
import {mdiMagnify} from "@mdi/js";


export function SearchBar(props) {
    return (
        <div className="container h-auto flex flex-col justify-center rounded">
            <div className="relative w-full flex-1">
                <input type="text"
                       className="w-full h-14 pl-3 pr-8 rounded z-0 focus:outline-none shadow-lg bg-gray-200"
                       placeholder="Patient ..." onChange={(result) => props.result(result.target.value)}/>
                <div className="absolute top-4 right-3">
                    <Icon path={mdiMagnify} size={1} onClick={() => console.log("salut")}/>
                </div>
            </div>
        </div>
    )
}