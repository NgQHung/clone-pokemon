import { createSlice } from "@reduxjs/toolkit";

const initialValue = { isOpen: false };

const actionModalSlice = createSlice({
    name: "action",
    initialState: initialValue,
    reducers: {
        openModal(state) {
            state.isOpen = !state.isOpen;
        },
        closeModal(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const actionModalSliceActions = actionModalSlice.actions;

export default actionModalSlice.reducer;
