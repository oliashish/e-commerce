import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "../src/styles/main.css";
import Home from "./pages/Home";
import Header from "./components/mainHeader/Header";
import ProductDetails from "./pages/ProductDetails";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/productdetails/:productname"
                    component={ProductDetails}
                />
            </Switch>
        </div>
    );
};

export default App;
