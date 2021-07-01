import { connect } from "react-redux";

export const Cart = (props) => {
    return (
        <div>
            inside cart - this component will have items list on left and
            checkout component with total price on right
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
