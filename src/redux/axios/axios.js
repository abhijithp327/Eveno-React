import axios from 'axios';
import appConfig from '../../config/appConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
    baseURL: appConfig.server.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                console.log('Token set in interceptor:', token);
            }
            return config;
        } catch (error) {
            console.error('Error getting token in interceptor:', error);
            return config;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Optional: Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 || error.response?.status === 499) {
            // Handle token expiration
            try {
                await AsyncStorage.removeItem('token');
                // You might want to trigger a logout action here
                // dispatch(logout());
            } catch (e) {
                console.error('Error removing token:', e);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;