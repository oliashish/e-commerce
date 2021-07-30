import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../state/sidebar/sidebarAction";

const SideBar = (props) => {
    const sidebar = useSelector((state) => state.sidebar);
    const { isOpen } = sidebar;
    const [sidebarToggle, setsidebarToggle] = useState(isOpen);
    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(closeSidebar());
        setsidebarToggle(isOpen);
    };

    return (
        <>
            {sidebarToggle ? (
                <>
                    <div
                        className="w-full h-screen fixed top-0 left-0 bg-gray-100 backdrop-blur-md md:hidden z-50"
                        onClick={handleSidebar}
                    ></div>
                    <div className="w-5/6 h-screen pt-20 text-center fixed top-0 left-0 overflow-x-hidden shadow-xl md:hidden z-50">
                        <h1 className="text-2xl font-medium">
                            Welcome to Aura Apex
                        </h1>
                        <p className="text-xl">
                            Your Personal store for everything
                        </p>
                        <div className="w-10/12 mx-auto py-6 text-xl rounded-2xl mt-8 bg-black text-center text-white">
                            Sidebar coming soon
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default SideBar;
