import { createSlice } from "@reduxjs/toolkit";

const initialValue = {};

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: initialValue,
    reducers: {
        fetchApi() {},
    },
});

export const apiSliceActions = apiSlice.actions;

export default apiSlice;
