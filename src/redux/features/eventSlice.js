import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEventsApi, getAllExhibitorEventsApi, getAllExhibitorScannedUsersApi, scanEventApi, scanTicketDetailApi, scanTicketExhibitorApi } from "../actions/event";



const initialState = {

    isEventsLoading: false,
    isEventsLoaded: false,
    isEventsLoadError: false,
    allEvents: [],

    isScanEventLoading: false,
    isScanEventLoaded: false,
    isScanEventLoadError: false,

    isScanTicketLoading: false,
    isScanTicketLoaded: false,
    isScanTicketLoadError: false,

    isScanExhibitorLoading: false,
    isScanExhibitorLoaded: false,
    isScanExhibitorLoadError: false,

    isExhibitorEventsLoading: false,
    isExhibitorEventsLoaded: false,
    isExhibitorEventsLoadError: false,
    allExhibitorEvents: [],

    isExhibitorScannedUsersLoading: false,
    isExhibitorScannedUsersLoaded: false,
    isExhibitorScannedUsersLoadError: false,
    allExhibitorScannedUsers: [],


};


export const getAllEvents = createAsyncThunk('events', async ({ perPage = 10, page = 1, searchQuery = '' }, thunkAPI) => {
    try {
        const response = await getAllEventsApi(perPage, page, searchQuery);
        // console.log('country slice response', response);
        // console.log('country slice response data', response.result);
        return thunkAPI.fulfillWithValue(response.result)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const scanEvent = createAsyncThunk('scanEvent', async ({ id, data }, thunkAPI) => {
    console.log('id: ', id, 'data: ', data);
    try {
        const response = await scanEventApi(id, data);
        return thunkAPI.fulfillWithValue(response);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const scanTicketDetail = createAsyncThunk('scanTicketDetail', async (data, thunkAPI) => {
    try {
        const response = await scanTicketDetailApi(data);
        return thunkAPI.fulfillWithValue(response);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const scanTicketExhibitor = createAsyncThunk('scanTicketExhibitor', async ({ id, data }, thunkAPI) => {
    try {
        const response = await scanTicketExhibitorApi(id, data);
        return thunkAPI.fulfillWithValue(response);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const getAllExhibitorEvents = createAsyncThunk('getAllExhibitorEvents', async ({ perPage = 10, page = 1, searchQuery = '' }, thunkAPI) => {
    try {
        const response = await getAllExhibitorEventsApi(perPage, page, searchQuery);
        return thunkAPI.fulfillWithValue(response.result);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getAllExhibitorScannedUsers = createAsyncThunk('getAllExhibitorScannedUsers', async ({ id, perPage = 10, page = 1, searchQuery = '' }, thunkAPI) => {
    try {
        const response = await getAllExhibitorScannedUsersApi(id, perPage, page, searchQuery);
        return thunkAPI.fulfillWithValue(response.result);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.pending, (state) => {
                state.isEventsLoading = true;
                state.isEventsLoaded = false;
                state.isEventsLoadError = false;
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.isEventsLoading = false;
                state.isEventsLoaded = true;
                state.isEventsLoadError = false;
                state.allEvents = action.payload;
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.isEventsLoading = false;
                state.isEventsLoaded = false;
                state.isEventsLoadError = true;
            })

            // scan event
            .addCase(scanEvent.pending, (state) => {
                state.isScanEventLoading = true;
                state.isScanEventLoaded = false;
                state.isScanEventLoadError = false;
            })
            .addCase(scanEvent.fulfilled, (state, action) => {
                state.isScanEventLoading = false;
                state.isScanEventLoaded = true;
                state.isScanEventLoadError = false;
            })
            .addCase(scanEvent.rejected, (state, action) => {
                state.isScanEventLoading = false;
                state.isScanEventLoaded = false;
                state.isScanEventLoadError = true;
            })

            // scan ticket detail
            .addCase(scanTicketDetail.pending, (state) => {
                state.isScanTicketLoading = true;
                state.isScanTicketLoaded = false;
                state.isScanTicketLoadError = false;
            })
            .addCase(scanTicketDetail.fulfilled, (state, action) => {
                state.isScanTicketLoading = false;
                state.isScanTicketLoaded = true;
                state.isScanTicketLoadError = false;
            })
            .addCase(scanTicketDetail.rejected, (state, action) => {
                state.isScanTicketLoading = false;
                state.isScanTicketLoaded = false;
                state.isScanTicketLoadError = true;
            })

            // get all exhibitor events
            .addCase(getAllExhibitorEvents.pending, (state) => {
                state.isExhibitorEventsLoading = true;
                state.isExhibitorEventsLoaded = false;
                state.isExhibitorEventsLoadError = false;
            })
            .addCase(getAllExhibitorEvents.fulfilled, (state, action) => {
                state.isExhibitorEventsLoading = false;
                state.isExhibitorEventsLoaded = true;
                state.isExhibitorEventsLoadError = false;
                state.allExhibitorEvents = action.payload;
            })
            .addCase(getAllExhibitorEvents.rejected, (state, action) => {
                state.isExhibitorEventsLoading = false;
                state.isExhibitorEventsLoaded = false;
                state.isExhibitorEventsLoadError = true;
            })

            // get all exhibitor scanned users
            .addCase(getAllExhibitorScannedUsers.pending, (state) => {
                state.isExhibitorScannedUsersLoading = true;
                state.isExhibitorScannedUsersLoaded = false;
                state.isExhibitorScannedUsersLoadError = false;
            })
            .addCase(getAllExhibitorScannedUsers.fulfilled, (state, action) => {
                state.isExhibitorScannedUsersLoading = false;
                state.isExhibitorScannedUsersLoaded = true;
                state.isExhibitorScannedUsersLoadError = false;
                state.allExhibitorScannedUsers = action.payload;
            })
            .addCase(getAllExhibitorScannedUsers.rejected, (state, action) => {
                state.isExhibitorScannedUsersLoading = false;
                state.isExhibitorScannedUsersLoaded = false;
                state.isExhibitorScannedUsersLoadError = true;
            })


    }
});

export default eventSlice.reducer;
