import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth,
    };
};

const Protected = ({ component: Component, ...rest }) => {
    let { isLoggedIn } = rest.isAuth.newAuthState;
    return (
        <Route
            render={(props) => {
                if (isLoggedIn) {
                    return <Component />;
                } else {
                    return <Redirect to="/authenticate" />;
                }
            }}
        />
    );
};

export default connect(mapStateToProps)(Protected);
