import { createSlice } from "@reduxjs/toolkit";
import { CgLogOut } from "react-icons/cg";

const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedin: false},
    reducers: {
        login(state) {

            state.isLoggedin = true;
        },
        logout(state) {
            state.isLoggedin = false
        },
    },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;