import React from "react";
import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import ToggleButton from "./ToggleButton";
import UserInfoIcons from "./UserInfoIcons";

const Header = () => {
    const toggle = useSelector((state) => state.sideBarReducer);

    return (
        <header className="mt-0 border-b-2">
            <nav
                className="flex justify-around items-center shadow-sm"
                role="navigation"
            >
                {toggle && <SideBar />}
                <ToggleButton />
                <Logo />
                <Navlinks />
                <UserInfoIcons />
            </nav>
        </header>
    );
};

export default Header;
