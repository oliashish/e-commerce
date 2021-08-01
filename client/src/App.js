import React, { lazy, Suspense } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";

import Header from "./components/MainHeader/Header";
import Home from "./pages/Home";

const IndividualProductDetails = lazy(() =>
    import("./components/ProductDetails/IndividualProductDetails")
);
const { Cart } = lazy(() => import("./pages/Cart/Cart"));
const Login = lazy(() => import("./components/form/Login"));
const Signup = lazy(() => import("./components/form/Signup"));
const UserAddress = lazy(() => import("./components/shipping/UserAddress"));
const Payment = lazy(() => import("./components/shipping/payment/Payment"));
const PlaceOrder = lazy(() => import("./components/shipping/PlaceOrder"));
const Category = lazy(() => import("./components/ProductDetails/Category"));

axios.defaults.baseURL = "https://aura-apex.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:5000";    

axios.defaults.withCredentials = true;

const App = (props) => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Suspense fallback="">
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

                    <Route
                        exact
                        path="/shipping/address"
                        component={UserAddress}
                    />

                    <Route exact path="/shipping/payment" component={Payment} />

                    <Route
                        exact
                        path="/shipping/placeorder"
                        component={PlaceOrder}
                    />
                </Suspense>
            </Switch>
        </div>
    );
};

export default App;
