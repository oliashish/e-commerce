import React from "react";
import UserTracking from "./UserTracking";

const UserList = () => {
    return (
        <div className="w-full h-full flex-col justify-evenly items-center border-2 border-yellow-300">
            <div className="w-full h-1/5 flex-col justify-between items-center">
                <p className="text-2xl ml-2">Welcome to Aura-Apex</p>
                <button className="bg-red-400 ml-2 px-10 py-3 rounded-full text-2xl font-serif font-semibold">
                    LOGIN / SIGNUP
                </button>
            </div>
            <UserTracking />
            <div className="">
                <button className="bg-red-400 px-10 py-3 ml-2 rounded-full text-2xl font-serif font-semibold">
                    LOGOUT
                </button>
            </div>
        </div>
    );
};

export default UserList;
