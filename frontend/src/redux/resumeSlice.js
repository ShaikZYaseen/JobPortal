import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name:"resumeData",
    initialState:{
        loading:false,
        data:null
    },
    reducers:{
        // actions
        setLoading:(state, action) => {
            state.loading = action.payload;
        },
        setData:(state, action) => {
            state.user = action.payload;
        }
    }
});
export const {setLoading, setData} = resumeSlice.actions;
export default resumeSlice.reducer;