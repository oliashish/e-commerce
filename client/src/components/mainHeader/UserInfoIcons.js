import { ShoppingCartOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import avatarDummy from "../../images/avatadummy.jpeg";

const mapStateToProps = (state) => {
    return {
        profile: state.auth,
    };
};

const UserInfoIcons = (props) => {
    return (
        <div className="flex justify-between aligns-center">
            <Link to="/cartitems">
                <ShoppingCartOutlined fontSize="large">
                    <span className=""></span>
                </ShoppingCartOutlined>
            </Link>
            <Link>
                <div className="w-10 h-10 ml-3 rounded-full">
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
