import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordApi, loginApi, registerApi } from "../actions/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';



const initialState = {

    user: null,
    token: null,

    isUserLogging: false,
    isUserLogged: false,
    isUserLoginError: false,
    isUserLoggedIn: false,

    isUserRegistering: false,
    isUserRegistered: false,
    isUserRegisterError: false,

    isUserForgotPassword: false,
    isUserForgotPasswordError: false,
    isUserForgotPasswordSuccess: false,

};


export const login = createAsyncThunk('login', async (data, thunkAPI) => {
    // console.log('data: ', data);
    try {
        const response = await loginApi(data);
        // console.log('slice response data', response);
        return thunkAPI.fulfillWithValue(response)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});


export const register = createAsyncThunk('register', async (email, thunkAPI) => {
    try {
        const response = await registerApi(email);
        // console.log('slice response data', response);
        return thunkAPI.fulfillWithValue(response)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});


// Logout action
export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        // Clear token from AsyncStorage
        await AsyncStorage.removeItem('token');
        // console.log('Token removed from AsyncStorage');
        return thunkAPI.fulfillWithValue();
    } catch (error) {
        // console.error('Failed to remove token from AsyncStorage:', error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const forgotPassword = createAsyncThunk('forgotPassword', async (data, thunkAPI) => {
    try {
        const response = await forgotPasswordApi(data);
        // console.log('slice response data', response);
        return thunkAPI.fulfillWithValue(response)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder

            // login
            .addCase(login.pending, (state, action) => {
                state.isUserLogging = true;
                state.isUserLogged = false;
                state.isUserLoginError = false;
                state.user = null;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.isUserLogging = false;
                state.isUserLogged = true;
                state.isUserLoginError = false;
                state.isUserLoggedIn = true
                // Extract user and token from payload
                const user = action.payload?.result?.user;
                const token = action.payload?.result?.token;

                console.log('user asyncstorage: ', user);
                console.log('token: ', token);

                if (token && user) {
                    // Update Redux state
                    state.user = user;
                    state.token = token;

                    Promise.all([
                        AsyncStorage.setItem('token', token),
                        AsyncStorage.setItem('user', JSON.stringify(user))
                    ])
                        .then(() => {
                            console.log('Token and user data saved to AsyncStorage');
                        })
                        .catch((error) => {
                            console.error('Failed to save data to AsyncStorage:', error);
                        });
                } else {
                    console.error('Missing token or user data in the response');
                }
            })

            .addCase(login.rejected, (state, action) => {
                state.isUserLogging = false;
                state.isUserLogged = false;
                state.isUserLoginError = true;
                state.user = null;
            })

            // register
            .addCase(register.pending, (state, action) => {
                state.isUserRegistering = true;
                state.isUserRegistered = false;
                state.isUserRegisterError = false;
            })

            .addCase(register.fulfilled, (state, action) => {
                state.isUserRegistering = false;
                state.isUserRegistered = true;
                state.isUserRegisterError = false;
            })

            .addCase(register.rejected, (state, action) => {
                state.isUserRegistering = false;
                state.isUserRegistered = false;
                state.isUserRegisterError = true;
            })

            // logout
            .addCase(logout.fulfilled, (state) => {
                state.isUserLogged = false;
                state.isUserLoggedIn = false;
                state.token = null;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                console.error('Failed to logout:', action.payload);
            })

            // forgot password
            .addCase(forgotPassword.pending, (state, action) => {
                state.isUserForgotPassword = true;
                state.isUserForgotPasswordError = false;
                state.isUserForgotPasswordSuccess = false;
            })

            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isUserForgotPassword = false;
                state.isUserForgotPasswordError = false;
                state.isUserForgotPasswordSuccess = true;
            })

            .addCase(forgotPassword.rejected, (state, action) => {
                state.isUserForgotPassword = false;
                state.isUserForgotPasswordError = true;
                state.isUserForgotPasswordSuccess = false;
            })
    },
});


export default authSlice.reducer;