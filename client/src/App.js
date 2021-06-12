import React from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import Header from "./components/mainHeader/Header";
import Payment from "./payment/Payment";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/authenticate" component={Auth} />
                <Route exact paht="/pay" component={Payment} />
            </Switch>
        </div>
    );
};

export default App;
