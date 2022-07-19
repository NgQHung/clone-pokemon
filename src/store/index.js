import { configureStore } from "@reduxjs/toolkit";

import actionModalSlice from "./modalActions-slice";

const store = configureStore({
    reducer: { actionModalSlice: actionModalSlice },
});

export default store;
