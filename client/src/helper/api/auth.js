import axios from "axios";

export const SignUp = async (data) => {
    const response = await axios.post("/api/authenticate/signup", data);
    axios.defaults.headers.common["auth-token"] = response.data.success[0];
    return response;
};
