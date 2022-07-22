import { configureStore } from "@reduxjs/toolkit";
import loadMoreItems from "./loadMoreItems";

import actionModalSlice from "./modalActions-slice";
import showDetailSlice from "./showDetail-slice";

const store = configureStore({
    reducer: {
        actions: actionModalSlice,
        showDetailSlice: showDetailSlice,
        loadMore: loadMoreItems,
    },
});

export default store;
