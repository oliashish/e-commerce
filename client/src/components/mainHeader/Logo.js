import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.jpg";

const Logo = () => {
   return (
      <div>
         <Link to="/">
            <img
               src={logo}
               alt="aura apex"
               className="w-32 md:w-48 lg:w-50 mt-3"
            ></img>
         </Link>
      </div>
   );
};

export default Logo;
