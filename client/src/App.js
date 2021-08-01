import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.min.css";

import Header from "./components/MainHeader/Header";
import Home from "./pages/Home";
import IndividualProductDetails from "./cmponents/ProductDetails/IndividualProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import UserAddress from "./components/shipping/UserAddress";
import Payment from "./components/shipping/payment/Payment";
import PlaceOrder from "./components/shipping/PlaceOrder";
import Category from "./components/ProductDetails/Category";

axios.defaults.baseURL = "https://aura-apex.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:5000";

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

                <Route exact path="/:cat" component={Category} />

                <Route exact path="/cart" component={Cart} />

                <Route exact path="/cart/:productId?" component={Cart} />

                <Route exact path="/shipping/address" component={UserAddress} />

                <Route exact path="/shipping/payment" component={Payment} />

                <Route
                    exact
                    path="/shipping/placeorder"
                    component={PlaceOrder}
                />
            </Switch>
        </div>
    );
};

export default App;
