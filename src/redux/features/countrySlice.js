import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCountries } from "../actions/country";


const initialState = {
    isCountriesLoading: false,
    isCountriesLoaded: false,
    isCountriesLoadError: false,
    allCountries: []
};


export const getAllCountries = createAsyncThunk('countries', async (_, thunkAPI) => {
    try {
        const response = await getCountries();
        // console.log('country slice response', response);
        // console.log('country slice response data', response.result);
        return thunkAPI.fulfillWithValue(response.result)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});


const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountries.pending, (state) => {
                state.isCountriesLoading = true;
                state.isCountriesLoaded = false;
                state.isCountriesLoadError = false;
            })
            .addCase(getAllCountries.fulfilled, (state, action) => {
                state.isCountriesLoading = false;
                state.isCountriesLoaded = true;
                state.isCountriesLoadError = false;
                state.allCountries = action.payload;
            })
            .addCase(getAllCountries.rejected, (state, action) => {
                state.isCountriesLoading = false;
                state.isCountriesLoaded = false;
                state.isCountriesLoadError = true;
            })
    }
});

export default countrySlice.reducer;
