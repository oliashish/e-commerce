import React from "react";
import { useDispatch } from "react-redux";

import { sideBarAction } from "../../state/sidebar/sidebarAction";
import UserList from "./UserList";

const SideBar = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="w-full h-screen fixed top-0 left-0 bg-gray-100 backdrop-blur-md md:hidden z-50"
                onClick={() => dispatch(sideBarAction())}
            ></div>
            <div className="w-5/6 h-screen fixed top-0 left-0 border-yellow-300 border-2 overflow-x-hidden shadow-xl bg-gray-500 md:hidden z-50">
                <UserList />
            </div>
        </>
    );
};

export default SideBar;
