import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";

export type UserType = {
    id: number;
    first_name: string;
    last_name: string;
    trust: number;
    shared_service: string;
};

const getUsers = createAsyncThunk<
    UserType[],
    void,
    {
        rejectValue: { error: string };
        returnValue: UserType[];
    }
>("data/getUsers", async (_, thunkAPI) => {
    try {
        const response = await api.get("/users.json");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: "Impossible get data"
        });
    }
});

export default getUsers;
