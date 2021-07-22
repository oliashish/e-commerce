import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/auth/authAction";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const submitHander = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div className="w-3/4 mx-auto mt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-auto w-8/12 p-8">
                <p className="text-4xl mb-4 text-yellow-600">
                    Login to proceed
                </p>
                <form
                    className="w-9/12 flex flex-col justify-between"
                    onSubmit={submitHander}
                >
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-8"
                            type="email"
                            required
                            placeholder="enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-8"
                            type="password"
                            required
                            placeholder="enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mx-auto text-xl bg-yellow-400 rounded-full border-0 focus:outline-none hover:bg-yellow-500 mt-10"
                    >
                        Login
                    </button>
                </form>
            </div>
            <Link to="/register/signup" className="hover:underline">
                Don't have an account? Register
            </Link>
        </div>
    );
};

export default Login;
