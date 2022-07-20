import { configureStore } from "@reduxjs/toolkit";

import actionModalSlice from "./modalActions-slice";
import showDetailSlice from "./showDetail-slice";

const store = configureStore({
    reducer: { actions: actionModalSlice, showDetailSlice: showDetailSlice },
});

export default store;
