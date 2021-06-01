import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/authenticate" component={Auth} />
            </Switch>
        </div>
    );
};

export default App;
