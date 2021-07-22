import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");

    const submitHander = () => {};

    return (
        <div className="w-3/4 mx-auto mt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-auto w-8/12 p-8">
                <p className="text-4xl mb-4 text-yellow-600">Create Account</p>
                <form
                    className="w-9/12 flex flex-col justify-between"
                    onSubmit={submitHander}
                >
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            id="email"
                            placeholder="enter your name"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="email"
                            required
                            placeholder="enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="password"
                            required
                            placeholder="enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                            placeholder="enter your contact number"
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mx-auto text-xl bg-yellow-400 rounded-full border-0 focus:outline-none hover:bg-yellow-500 mt-8"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <Link to="/auth/login" className="hover:underline">
                Already have an account? Login
            </Link>
        </div>
    );
};

export default Signup;
