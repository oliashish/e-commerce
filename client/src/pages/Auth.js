import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import authAction from "../state/auth/authAction";

const mapStateToProps = (state) => {
    return {
        user: state.authReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (userState, history) => {
            dispatch(authAction(userState, history));
        },
    };
};

const Auth = (props) => {
    const { register } = props;

    const [userState, setUserState] = useState({});
    const history = useHistory();

    return (
        <div className="text-center">
            <h2>SignUp/Login</h2>
            <div className="w-3/4 mx-auto flex justify-between border-2">
                <div className="w-1/2 border-r-4">
                    <p className="text-2xl">SignUp</p>
                    <form
                        className="flex-col justify-between"
                        onSubmit={(e) => {
                            e.preventDefault();
                            register(userState, history);
                        }}
                    >
                        <div>
                            <label className="text-xl">username : </label>
                            <input
                                className="border-4 text-lg"
                                type="text"
                                placeholder="enter your name"
                                onChange={(e) => {
                                    const username = e.target.value;

                                    userState["username"] = username;
                                }}
                            />
                        </div>
                        <div>
                            <label className="text-xl">email : </label>
                            <input
                                className="border-4 text-lg"
                                type="text"
                                placeholder="enter your email"
                                onChange={(e) => {
                                    const email = e.target.value;
                                    userState["email"] = email;
                                }}
                            />
                        </div>
                        <div>
                            <label className="text-xl">password : </label>
                            <input
                                className="border-4 text-lg"
                                type="password"
                                placeholder="enter your password"
                                onChange={(e) => {
                                    const password = e.target.value;

                                    userState["password"] = password;
                                }}
                            />
                        </div>
                        <div>
                            <label className="text-xl">contact : </label>
                            <input
                                className="border-4 text-lg"
                                type="number"
                                placeholder="enter your number"
                                onChange={(e) => {
                                    const contact = e.target.value;

                                    userState["contact"] = contact;
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-1/2 mt-5 mx-auto cursor-pointer border-4 border-gray-900"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-1/2">
                    <p className="text-2xl">LogIn</p>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
