import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { connect } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    };
};

const App = (props) => {
    const [user, setUser] = useState(props);

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/authenticate" component={Auth} />
            </Switch>
        </div>
    );
};

export default connect(mapStateToProps)(App);
