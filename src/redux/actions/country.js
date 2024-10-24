import axiosInstance from "../axios/axios";

export const getCountries = async () => {
    try {
        const response = await axiosInstance.get("/systemconfig/getcountry");
        return response.data;
    } catch (error) {
        console.error("getCountries API error: ", error);
        return error.response.data;
    }
};