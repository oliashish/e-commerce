import axios from "axios";

export const SignUp = async (data) => {
    const response = await axios.post("/api/authenticate/signup", data);
    return response;
};

export const LogOut = async () => {
    const response = await axios.get("/api/authenticate/logout");
    return response;
};

export const LogIn = async (email, password) => {
    try {
        const response = await axios.post("/api/authenticate/login", {
            email,
            password,
            Credential: "include",
        });

        return response;
    } catch (error) {
        throw error;
    }
};
