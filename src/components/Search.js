import React from "react";
import {SearchBar} from "./SearchBar";
import {patientList} from "../services/PatientsServices";


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        }
    }

    componentDidMount() {
        if (this.state.patients.length === 0) {
            patientList()
                .then((result) => {
                    if (result.success) {
                        this.setState({patients: result.data})
                    }
                })
        }
    }

    display() {
        if (this.state.patients === false) {
            return <div>
                Loading ...
            </div>
        }

        return (
            <div className={"float-left w-1/5 h-full p-3 border-2"}>
                <SearchBar patients={this.state.patients} />
            </div>
        )
    }

    render() {
        return this.display()
    }
}

export {Search as default};