import { createSlice } from "@reduxjs/toolkit";

// declaring type
interface Auth{
  isLogged: boolean
}
const initialState: Auth = {
  isLogged: false
}
// slice creation
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state)=>{
      state.isLogged = true;
    },
    userLogOut: (state)=>{
      state.isLogged = false;
    }
  }
}); 

// exporting
export const {userLogin, userLogOut} = authSlice.actions;
export default authSlice.reducer;