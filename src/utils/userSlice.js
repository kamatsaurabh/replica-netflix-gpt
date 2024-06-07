import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state, action) =>{
            return action.payload;
        },
        removeUser:(state, action) => {
            return null;
        },
    },
    // extraReducers: {
    //     [createTour.pending]: (state, action) => {
    //       state.loading = true;
    //     },
    //     [createTour.fulfilled]: (state, action) => {
    //       state.loading = false;
    //       state.tours = [action.payload];
    //     },
    //     [createTour.rejected]: (state, action) => {
    //       state.loading = false;
    //       state.error = action.payload.message;
    //     },
    // }
});

export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions; 