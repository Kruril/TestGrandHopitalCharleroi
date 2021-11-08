import {SearchBar} from "./SearchBar";

export function Search(props) {


    return (
        <div className={"float-left w-1/5 h-full p-3 border-2"}>
            <SearchBar patients={props.patients} update={props.update}/>
        </div>
    )
}