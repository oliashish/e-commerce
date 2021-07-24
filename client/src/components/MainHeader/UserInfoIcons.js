import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ShoppingCartOutlined, ArrowDropDownSharp } from "@material-ui/icons";
import { logout } from "../../state/auth/authAction";
import { emptyCart } from "../../state/cart/cartAction";

const UserInfoIcons = (props) => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const [dropdown, setDropdown] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        setDropdown(false);
        dispatch(logout());
        dispatch(emptyCart());
        history.push("/");
    };
    return (
        <div className="flex justify-between aligns-center">
            <Link to="/cart">
                <ShoppingCartOutlined fontSize="large"></ShoppingCartOutlined>
                {cartItems.length > 0 && (
                    <span className="bg-red-300 mr-3 text-lg font-medium text-center px-2 rounded-full">
                        {cartItems.length}
                    </span>
                )}
            </Link>

            {userInfo ? (
                <div className="ml-4 text-xl font-semibold shadow-xl">
                    <Link onClick={() => setDropdown(!dropdown)}>
                        {userInfo.username[0].toUpperCase()}
                        <ArrowDropDownSharp />
                    </Link>
                </div>
            ) : (
                <Link
                    to="/login"
                    className="border-2 font-semibold bg-yellow-400 text-gray-600"
                >
                    login
                </Link>
            )}
            {dropdown && (
                <h1 className="cursor-pointer" onClick={logoutHandler}>
                    logout
                </h1>
            )}
        </div>
    );
};

export default UserInfoIcons;
