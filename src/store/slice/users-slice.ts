import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import getUsers, { UserType } from "./actions/get-users";

type State = {
    all: UserType[];
    error?: string;
    loading: boolean;
    pagination: {
        currentPage: number;
        perPage: number;
        totalPages: number;
    };
};

const initialState: State = {
    all: [],
    error: undefined,
    loading: false,
    pagination: {
        currentPage: 1,
        perPage: 5,
        totalPages: 0
    }
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setPage: (state: State, { payload }) => {
            state.pagination = {
                ...state.pagination,
                currentPage: payload
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.all = payload;
            state.pagination = {
                ...state.pagination,
                totalPages: Math.ceil(payload.length / state.pagination.perPage)
            };
        });

        builder.addCase(getUsers.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message;
        });
    }
});

export const selectUsers = (state: RootState) => {
    const { currentPage, perPage } = state.users.pagination;
    return state.users.all.slice(currentPage * perPage - perPage, currentPage * perPage);
};
export const selectIsLoading = (state: RootState) => state.users.loading;
export const selectPagination = (state: RootState) => state.users.pagination;

export const { setPage } = usersSlice.actions;

export default usersSlice.reducer;
