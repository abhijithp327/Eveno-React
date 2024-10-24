import axiosInstance from "../axios/axios";


export const loginApi = async (data) => {
    try {
        const response = await axiosInstance.post('/auth/login', data);
        // console.log('auth action response data', response.data);
        return response.data;  // Return the response data on success
    } catch (error) {
        // console.error('Login API error: ', error);
        // Return error response if it exists, otherwise return a generic error message
        return error.response ? error.response.data : { message: 'An unknown error occurred' };
    }
};


export const registerApi = async (data) => {
    try {
        const response = await axiosInstance.post('/auth/register', data);
        // console.log('auth action response data', response.data);
        return response.data;
    } catch (error) {
        // console.error('Register API error: ', error);
        return error.response ? error.response.data : { message: 'An unknown error occurred' };
    }
};


export const forgotPasswordApi = async (data) => {
    console.log('data: ', data);
    try {
        const response = await axiosInstance.post('/auth/forgotpassword', data);
        // console.log('auth action response data', response.data);
        return response.data;
    } catch (error) {
        // console.error('Forgot Password API error: ', error);
        return error.response ? error.response.data : { message: 'An unknown error occurred' };
    }
};
