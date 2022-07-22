import { createSlice } from "@reduxjs/toolkit";

const initialValue = { loadedMoreData: [], loadMoreIsClicked: false };

const loadMoreSlice = createSlice({
    name: "loadMore",
    initialState: initialValue,
    reducers: {
        show(state, action) {
            const restData = action.payload;
            state.loadMoreIsClicked = true;
            if (state.loadMoreIsClicked) {
                state.loadedMoreData.push(restData);
            }
        },
    },
});

export const loadMoreActions = loadMoreSlice.actions;

export default loadMoreSlice.reducer;
