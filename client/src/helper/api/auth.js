import axios from "axios";

export const SignUp = async (data) => {
    const response = await axios.post("/api/authenticate/signup", data);
    return response;
};

export const LogOut = async () => {
    const response = await axios.get("/api/authenticate/logout");
    console.log(response);
};

export const LogIn = async (data) => {
    const response = await axios.post("/api/authenticate/login", {
        data,
        Credential: "include",
    });
    return response;
};
