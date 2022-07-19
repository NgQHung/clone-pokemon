import { configureStore } from "@reduxjs/toolkit";

import actionModalSlice from "./modalActions-slice";

const store = configureStore({
    reducer: { actions: actionModalSlice },
});

export default store;
