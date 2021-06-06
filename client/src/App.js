import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
<<<<<<< HEAD
import Auth from "./pages/Auth";
import { connect } from "react-redux";
=======
import Header from "./components/mainHeader/Header";
import ProductDetails from "./pages/ProductDetails";
>>>>>>> 65139afd8fa905304032619b029b45ab426f1d85

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
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
<<<<<<< HEAD
                <Route exact path="/authenticate" component={Auth} />
=======
                <Route
                    exact
                    path="/productdetails/:productname"
                    component={ProductDetails}
                />
>>>>>>> 65139afd8fa905304032619b029b45ab426f1d85
            </Switch>
        </div>
    );
};

export default connect(mapStateToProps)(App);
