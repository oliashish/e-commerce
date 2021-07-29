import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Message from "../../components/load/Message";
import { addToCart, removeFromCart } from "../../state/cart/cartAction";

export const Cart = (props) => {
    const dispatch = useDispatch();
    const { cartItems, shippingAddress } = useSelector((state) => state.cart);

    const productId = props.match.params.productId;
    const qty = props.location.search
        ? Number(props.location.search.split("=")[1])
        : 1;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, qty, productId]);

    const removeItemhandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        props.history.push(`/shipping/payment`, [cartItems]);
    };

    return (
        <>
            <h1 className="text-3xl my-8 ml-8 text-red-800">Order Summary</h1>
            <div className="w-11/12 mx-auto flex flex-row justify-between">
                <div className="w-8/12 flex flex-col justify-center">
                    <div className="shadow-xl flex flex-col pl-12 ml-2 justify-between">
                        <h1 className="text-xl font-semibold">Shipping</h1>
                        <h1 className="text-lg font-medium mt-2">
                            {shippingAddress[
                                shippingAddress.length - 1
                            ].username.toUpperCase()}
                        </h1>
                        <h3 className="text-lg">
                            {
                                shippingAddress[shippingAddress.length - 1]
                                    .address_line
                            }
                        </h3>
                        <h3 className="text-sm font-medium">
                            {
                                shippingAddress[shippingAddress.length - 1]
                                    .pin_cod
                            }
                        </h3>
                    </div>
                    <div className="w-full mt-8">
                        <ul className="w-full">
                            {cartItems.map((item) => {
                                return (
                                    <li key={item.id} className="shadow-xl">
                                        <div className="flex flex-row items-center border-b-2 pl-8 my-4">
                                            <div className="w-36  p-4">
                                                <img
                                                    src={`/images/${item.image}`}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="w-1/2 flex flex-col justify-center items-center ">
                                                <Link
                                                    to={`/product/${item.id}`}
                                                    className="text-center"
                                                >
                                                    <h1 className="text-2xl text-gray-600">
                                                        {item.name}
                                                    </h1>
                                                    <h3 className="text-xl">
                                                        {item.brand}
                                                    </h3>
                                                </Link>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <input
                                                    type="number"
                                                    value={item.qty}
                                                    min="1"
                                                    max={item.sku}
                                                    onChange={(e) =>
                                                        dispatch(
                                                            addToCart(
                                                                item.id,
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        )
                                                    }
                                                    className="w-1/2 border-2 border-gray-300 text-center"
                                                />
                                            </div>
                                            <p className="text-xl font-bold">
                                                ${item.price}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    removeItemhandler(item.id)
                                                }
                                                className="mx-auto rounded-full bg-red-500 py-2 px-5 text-gray-800 text-lg hover:bg-opacity-70"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-1/4 h-48 flex flex-col justify-center mt-3 mr-4 border-2 p-4">
                    <h2 className="text-3xl text-center">
                        Order Total{" "}
                        <strong>
                            {" "}
                            {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                        </strong>{" "}
                        items{" "}
                        <strong>
                            $
                            {cartItems.reduce(
                                (acc, curr) => acc + curr.price * curr.qty,
                                0
                            )}
                        </strong>
                    </h2>
                    <button
                        className="w-full mt-8 mx-auto rounded-full bg-yellow-300 py-2 text-gray-700 text-xl hover:bg-yellow-400"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
