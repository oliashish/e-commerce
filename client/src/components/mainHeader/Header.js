import React from "react";

import SideBar from "../SideBar";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import ToggleButton from "./ToggleButton";
import UserInfoIcons from "./UserInfoIcons";

const Header = () => {
   return (
      <header className="mt-0 border-b-2">
         <nav
            className="flex justify-around items-center shadow-sm"
            role="navigation"
         >
            <SideBar />
            <ToggleButton />
            <Logo />
            <Navlinks />
            <UserInfoIcons />
         </nav>
      </header>
   );
};

export default Header;
