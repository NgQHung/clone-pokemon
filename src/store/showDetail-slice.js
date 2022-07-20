import { createSlice } from "@reduxjs/toolkit";

const initialValue = { data: [], showDetail: false };

const showDetailSlice = createSlice({
    name: "detail",
    initialState: initialValue,
    reducers: {
        updateData(state, action) {
            const items = action.payload;
            state.data.push(items);
        },
        show(state, action) {
            state.showDetail = !state.showDetail;
            const id = action.payload;
            state.data.filter((item) => id === item.id);
        },
    },
});
export const showDetailActions = showDetailSlice.actions;

export default showDetailSlice.reducer;
