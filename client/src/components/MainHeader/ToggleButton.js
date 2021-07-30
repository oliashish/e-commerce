import React from "react";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../state/sidebar/sidebarAction";

const ToggleButton = () => {
    const dispatch = useDispatch();

    const toggleHandling = () => {
        dispatch(openSidebar());
    };

    return (
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleHandling}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </div>
    );
};

export default ToggleButton;
