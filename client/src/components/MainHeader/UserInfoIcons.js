import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@material-ui/icons";

const UserInfoIcons = (props) => {
    const { cartItems } = useSelector((state) => state.cart);
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
            <Link to="/">
                <div className="w-10 h-10 ml-5 -mt-0 border-2 text-center shadow-xl text-xl pt-1 rounded-full">
                    A
                </div>
            </Link>
        </div>
    );
};

export default UserInfoIcons;
