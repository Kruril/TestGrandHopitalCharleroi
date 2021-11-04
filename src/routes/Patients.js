import {GraphsView} from "../components/GraphsView";
import Search from "../components/Search";


export function Patients() {
    return (
        <div className={"flow-root h-full"}>
            <Search />
            <GraphsView />
        </div>
    )
}