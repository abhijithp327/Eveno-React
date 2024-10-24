import axiosInstance from "../axios/axios";

export const getAllEventsApi = async (perPage, page, searchQuery) => {
    try {
        const response = await axiosInstance.get(`/events/organizer/events?per_page=${perPage}&page=${page}&search_query=${encodeURIComponent(searchQuery)}`);
        return response.data;
    } catch (error) {
        console.error("getEvents API error: ", error);
        return error.response.data;
    }
};


export const scanEventApi = async (id, data) => {
    // console.log("event_id: ", id, "data: ", data);
    try {
        const response = await axiosInstance.post(`/events/tickets/scan/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("scanEvent API error: ", error);
        return error.response.data;
    }
};


export const scanTicketDetailApi = async () => {
    try {
        const response = await axiosInstance.get(`/systemconfig/scan/ticketdetails`);
        return response.data;
    } catch (error) {
        console.error("scanTicketDetail API error: ", error);
        return error.response.data;
    }
};