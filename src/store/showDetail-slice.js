import { createSlice } from "@reduxjs/toolkit";

const initialValue = { data: [], showDetail: false, dataClicked: [] };

const showDetailSlice = createSlice({
    name: "detail",
    initialState: initialValue,
    reducers: {
        updateData(state, action) {
            const items = action.payload;
            state.data.push(items);
        },
        show(state, action) {
            state.showDetail = true;
            const id = action.payload;
            const clickedId = state.data.filter((item) => id === item.number);
            state.dataClicked.pop();
            const dataIsEmpty = state.dataClicked.length === 0;
            if (dataIsEmpty) {
                clickedId.map((item) =>
                    state.dataClicked.push({
                        id: item.number,
                        img: item.img,
                        name: item.name,
                        number: item.number,
                    })
                );
            }
        },
    },
});
export const showDetailActions = showDetailSlice.actions;

export default showDetailSlice.reducer;
