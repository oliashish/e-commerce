import React from "react";
import axios from "axios";

import { Switch, Route, Redirect } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import Payment from "./payment/Payment";

import IndividualProductDetails from "./components/productDetails/IndividualProductDetails";
import { Cart } from "./components/Cart/Cart";
import Protected from "./helper/routes/Protected";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const App = (props) => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/authenticate" component={Auth} />
                <Route
                    exact
                    path="/product/:productname"
                    component={IndividualProductDetails}
                />
                <Protected path="/cartitems" component={Cart} />
                <Protected path="/payment" component={Payment} />
            </Switch>
            <Redirect to="/" />
        </div>
    );
};

export default App;
