import Axios from "axios";

export const SaveuserAddress = async (data) => {
    console.log(data);
    try {
        const response = await Axios.post("/api/user/address", data);
        return response;
    } catch (error) {
        throw error;
    }
};
