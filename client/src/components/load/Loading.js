import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loading({ color, loading, size }) {
    return (
        <div className="flex flex-row justify-center items-center mt-20">
            <BeatLoader color={color} loading={loading} size={size} />
        </div>
    );
}

export default Loading;
    