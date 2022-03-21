import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { FaGlasses } from 'react-icons/fa';

// get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

// Register user


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers : ()=> {}
});

export const { reset } = authSlice.actions
export default authSlice.reducer