import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../stores/api";

//step one
export const registerUserStepOne = createAsyncThunk(
    'user/registerUserStepOne',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('api/auth/first-step', userInput);
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
//step two
export const registerUserStepTwo = createAsyncThunk(
    'user/registerUserStepTwo',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('api/auth/second-step', userInput);
            if (response?.data?.status_code === 201) {
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

//get country Reg
export const getCountry = createAsyncThunk(
    'user/getCountry',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('api/country/list');
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

//get state Reg
export const getState = createAsyncThunk(
    'user/getState',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.get(`api/state/list/${userInput}`);
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

//login user
export const login = createAsyncThunk(
    'user/login',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('api/auth/login', userInput);
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
const initialState = {
    loading: false,
    message: "",
    error: false,
    countryList: [],
    message1: "",
    stateLists: [],
    loginUser: {}
}
const AuthSlice = createSlice(
    {
        name: 'logRegis',
        initialState,
        reducers: {
            logout: (state) => {
                state.isLoggedIn = false;
                sessionStorage.removeItem('chessToken');
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(registerUserStepOne.pending, (state) => {
                    state.loading = true
                })
                .addCase(registerUserStepOne.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.message = payload
                })
                .addCase(registerUserStepOne.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getCountry.pending, (state) => {
                    state.loading = true
                })
                .addCase(getCountry.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.countryList = payload
                })
                .addCase(getCountry.rejected, (state, { payload }) => {
                    state.loading = false
                    state.countryList = []
                    state.error = payload
                })
                .addCase(registerUserStepTwo.pending, (state) => {
                    state.loading = true
                })
                .addCase(registerUserStepTwo.fulfilled, (state, { payload }) => {
                    state.loading = false
                    // state.message1 = payload
                    const { token, user } = payload;
                    console.log("Payload", payload);

                    console.log("token", token);

                    sessionStorage.setItem("chessToken", JSON.stringify({ token: token }))
                    state.error = false
                })
                .addCase(registerUserStepTwo.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
                .addCase(getState.pending, (state) => {
                    state.loading = true
                })
                .addCase(getState.fulfilled, (state, { payload }) => {
                    state.loading = false
                    state.stateLists = payload
                    state.error = false
                })
                .addCase(getState.rejected, (state, { payload }) => {
                    state.loading = false
                    state.stateLists = []
                    state.error = payload
                })
                .addCase(login.pending, (state) => {
                    state.loading = true
                })
                .addCase(login.fulfilled, (state, { payload }) => {
                    state.loading = false
                    const { token, user } = payload;
                    console.log("Payload", payload);
                    console.log("token", token);


                    sessionStorage.setItem("chessToken", JSON.stringify({ token: token }))
                    state.error = false
                })
                .addCase(login.rejected, (state, { payload }) => {
                    state.loading = false
                    state.error = payload
                })
        }
    }
)
export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;