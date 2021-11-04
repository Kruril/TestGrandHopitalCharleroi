import {getPatients} from "../services/PatientsServices";
import React from "react";
import {SearchBar} from "./SearchBar";
import {SearchResult} from "./SearchResult";


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            result: []
        }
    }

    doSearch(){
        getPatients(
            (result) => {
                if (result.success) {
                    this.setState({patients: result.data})
                }
            }
        )
    }

    componentDidMount() {
        this.doSearch()
    }

    display() {
        if (this.state.patients === false) {
            return <div>
                Loading ...
            </div>
        }

        return (
            <div className={"float-left w-1/6 h-full p-3 border-2"}>
                <SearchBar patients={this.state.patients} result={ (result => this.setState({result}))}/>
                <SearchResult patients={this.state.patients} result={this.state.result}/>
            </div>
        )
    }

    render() {
        return this.display()
    }
}

export {Search as default};