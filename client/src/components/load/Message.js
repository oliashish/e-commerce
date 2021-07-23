import React from "react";

const Message = ({ children }) => {
    return (
        <div>
            <h1 className="text-red-800">{children}</h1>
        </div>
    );
};

export default Message;
