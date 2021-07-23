import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAddress } from "../../state/cart/cartAction";
const UserAddress = (props) => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();
    const [country, setCountry] = useState();

    const dispatch = useDispatch();

    const submitHander = (e) => {
        e.preventDefault();
        dispatch(saveAddress({ name, address, city, pincode, country }));
    };
    return (
        <div className="w-3/4 mx-auto mt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-auto w-8/12 p-8">
                <p className="text-4xl mb-4 text-yellow-600">Address</p>
                {/* {loading && <Loading />}
            {error && <Message>{error}</Message>} */}

                <form
                    className="w-9/12 flex flex-col justify-between"
                    onSubmit={submitHander}
                >
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            placeholder="enter your name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            placeholder="enter your address"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="text"
                            required
                            placeholder="enter your city name"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
                            type="number"
                            required
                            placeholder="enter your postal code"
                            onChange={(e) => setPincode(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="focus:outline-none w-full border-b-2 text-lg mt-4"
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserAddress;
