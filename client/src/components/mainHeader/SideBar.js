import React from "react";
import { useDispatch } from "react-redux";

import { sideBarAction } from "../../state/sidebar/sidebarAction";

const SideBar = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="w-full h-screen absolute top-0 left-0 bg-gray-100 backdrop-blur-md md:hidden z-50"
                onClick={() => dispatch(sideBarAction())}
            ></div>
            <div className="w-72 h-full absolute top-0 left-0 border-2 shadow-xl bg-gray-200 backdrop-blur-md text-center md:hidden z-50">
                sidebar
            </div>
        </>
    );
};

export default SideBar;
