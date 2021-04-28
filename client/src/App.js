import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [message, setMessage] = useState([]);

    const fetchAPI = async (url) => {
        const result = await axios.get(url);
        setMessage(JSON.stringify(result.data));
    };

    useEffect(() => {
        fetchAPI("/test");
    });
    return <div className="App">{message}</div>;
};

export default App;
