import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";

import IndividualProductDetails from "./components/ProductDetails/IndividualProductDetails";
import { Cart } from "./pages/Cart/Cart";
import Header from "./components/MainHeader/Header";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import Shipping from "./pages/Shipping";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />

                <Route
                    exact
                    path="/product/:productId"
                    component={IndividualProductDetails}
                />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/cart/:productId?" component={Cart} />
                <Route exact path="/shipping" component={Shipping} />
            </Switch>
        </div>
    );
};

export default App;
