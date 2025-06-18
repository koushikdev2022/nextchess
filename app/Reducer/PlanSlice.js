import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../stores/api";

//getPlansbyIP
export const getPlansByIp = createAsyncThunk(
    'getPlansByIp',

    async (user_input, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/plan/list/${user_input}`, user_input);
            if (response?.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)


//get ip Address
export const getIpData = createAsyncThunk(
    'ip/getIpData',  // Better naming convention with feature prefix
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://api.ipify.org?format=json");

            // ipify.org simply returns { "ip": "xxx.xxx.xxx.xxx" }
            // No status_code is returned by this API
            if (response?.data?.ip) {
                return response.data;
            } else {
                return rejectWithValue('Invalid response format');
            }
        } catch (err) {
            // Better error handling
            if (err.response?.data) {
                return rejectWithValue(err.response.data);
            } else if (err.message) {
                return rejectWithValue(err.message);
            } else {
                return rejectWithValue('Failed to fetch IP address');
            }
        }
    }
);
const initialState = {
    loading: false,
    plansData: [],
    error: false,
    ipData: ""
}
const PlanSlice = createSlice(
    {
        name: "plans",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(getPlansByIp.pending, (state) => {
                    state.loading = true
                })
                .addCase(getPlansByIp.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.plansData = payload
                    state.error = false
                })
                .addCase(getPlansByIp.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getIpData.pending, (state) => {
                    state.loading = true
                })
                .addCase(getIpData.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.ipData = payload
                    state.error = false
                })
                .addCase(getIpData.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }
    }
)
export default PlanSlice.reducer