import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Error from "./routes/Error";
import {Patients} from "./routes/Patients";

function App() {
    return (
        <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1 flex-col">
                    <Switch>
                        <Route path={'/'} component={Patients}/>
                        <Route path={'/patients'} component={Patients}/>
                        <Route exact component={Error}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
