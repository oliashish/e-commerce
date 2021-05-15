import React, { useState } from "react";
import Navlinks from "./mainHeader/Navlinks";

const SideBar = (visible) => {
   const [visibility, setVisibility] = useState(visible);
   return (
      <div className="w-full h-screen absolute top-0 left-0 bg-gray-100 backdrop-blur-md md:hidden z-0">
         <div className="w-72 h-full absolute top-0 left-0 border-2 shadow-xl bg-gray-200 backdrop-blur-md text-center md:hidden">
            <Navlinks />
         </div>
      </div>
   );
};

export default SideBar;
