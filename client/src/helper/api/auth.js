import Axios from "axios";

export const SignUp = async (data) => {
    try {
        const response = await Axios.post("/api/authenticate/signup", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const LogOut = async () => {
    const response = await Axios.get("/api/authenticate/logout");
    return response;
};

export const LogIn = async (email, password) => {
    try {
        const response = await Axios.post("/api/authenticate/login", {
            email,
            password,
            Credential: "include",
        });

        return response;
    } catch (error) {
        throw error;
    }
};
