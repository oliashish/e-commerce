import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@material-ui/icons";
import avatarDummy from "../../images/avatadummy.jpeg";

const mapStateToProps = (state) => {
    return {
        profile: state.auth,
    };
};

const UserInfoIcons = (props) => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
    return (
        <div className="flex justify-between aligns-center">
            <Link to="/cartitems">
                <ShoppingCartOutlined fontSize="large"></ShoppingCartOutlined>
                {cartItems.length > 0 && (
                    <span className="bg-red-300 mr-3 text-lg font-medium text-center px-2 rounded-full">
                        {cartItems.length}
                    </span>
                )}
            </Link>
            <Link to="/">
                <div className="w-10 h-10 ml-5 -mt-0 rounded-full">
                    {props.profile.isLoggedIn ? (
                        <img
                            src={props.profile.image}
                            className="rounded-full"
                            alt="user"
                        />
                    ) : (
                        <img
                            src={avatarDummy}
                            alt="A"
                            className="rounded-full"
                        />
                    )}
                </div>
            </Link>
        </div>
    );
};

export default connect(mapStateToProps)(UserInfoIcons);
