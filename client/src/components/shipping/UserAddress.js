import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveAddress } from "../../state/cart/cartAction";
const UserAddress = (props) => {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);
    const { shippingAddress } = useSelector((state) => state.cart);

    const history = useHistory();
    if (!userInfo) {
        history.push("/login");
    }

    const [username, setName] = useState("");
    const [address_line, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pin_cod, setPincode] = useState("");
    const [country, setCountry] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const { id } = userInfo;
        dispatch(   
            saveAddress({ username, address_line, city, pin_cod, country, id })
        );
        props.history.push("/shipping/placeorder");
    };
    return (
        <div className="w-3/4 mx-auto mt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-auto w-8/12 p-8">
                <p className="text-4xl mb-4 text-yellow-600">Address</p>
                {/* {loading && <Loading />}
            {error && <Message>{error}</Message>} */}

                <form
                    className="w-9/12 flex flex-col justify-between"
                    onSubmit={submitHandler}
                >
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            value={username}
                            placeholder="enter your name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            value={address_line}
                            placeholder="enter your address"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            value={city}
                            type="text"
                            required
                            placeholder="enter your city name"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            value={pin_cod}
                            type="number"
                            required
                            placeholder="enter your postal code"
                            onChange={(e) => setPincode(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            value={country}
                            type="text"
                            required
                            placeholder="enter your country"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mx-auto text-xl bg-yellow-400 rounded-full border-0 focus:outline-none hover:bg-yellow-500 mt-8"
                    >
                        Save Address
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserAddress;
