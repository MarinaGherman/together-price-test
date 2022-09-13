import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import getUsers, { UserType } from "./actions/get-users";

type State = {
    all: UserType[];
    error?: string;
    loading: boolean;
};

const initialState: State = {
    all: [],
    error: undefined,
    loading: false
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.all = payload;
        });

        builder.addCase(getUsers.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message;
        });
    }
});

export const selectUsers = (state: RootState) => state.users.all;
export const selectIsLoading = (state: RootState) => state.users.loading;

export default usersSlice.reducer;
