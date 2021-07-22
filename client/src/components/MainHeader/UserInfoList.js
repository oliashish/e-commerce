import React from "react";
import { Link } from "react-router-dom";

const UserInfoList = () => {
    return (
        <ul>
            <Link to="#">
                <li>You Order</li>
            </Link>

            <Link to="#">
                <button className="w-full py-3 mx-auto text-xl bg-yellow-400 rounded-full border-0 focus:outline-none hover:bg-yellow-500 mt-10">
                    Log Out
                </button>
            </Link>
        </ul>
    );
};
export default UserInfoList;
