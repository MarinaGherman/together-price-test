import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slice/users-slice";

const store = configureStore({
    reducer: {
        users: usersReducer
    },
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
