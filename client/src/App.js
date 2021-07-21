import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import IndividualProductDetails from "./components/ProductDetails/IndividualProductDetails";
import { Cart } from "./pages/Cart/Cart";
import Header from "./components/MainHeader/Header";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/authenticate" component={Auth} />
                <Route
                    exact
                    path="/product/:productId"
                    component={IndividualProductDetails}
                />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/cart/:productId?" component={Cart} />
            </Switch>
        </div>
    );
};

export default App;
