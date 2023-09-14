import { createSlice } from "@reduxjs/toolkit";

// when app start keep every thing empty
const initialState = {
  name: "",
  email: "",
  photo: "",
};

//  in setUserLoginDetails when login we store that data in their
// in setSignOutState we make all data to null(we say forgot the data )
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// for access in otherfiles
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
