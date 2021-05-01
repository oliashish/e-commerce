import "./App.css";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
    const [message, setMessage] = useState("");
    const GetData = async () => {
        const response = await axios.get("/test");
        setMessage(response.data.message);
    };
    return (
        <div className="App">
            <button onClick={GetData}>Get Data From Backend</button>
            <p>{message}</p>
        </div>
    );
};

export default App;
