
import { createSlice } from "@reduxjs/toolkit";



const initialState = {

  userName: "Kishan",

  password: "password",

};

const UserSlice = createSlice({

  name: "userSlice",

  initialState,

  reducers: {

    changePassword: function (state, { payload }) {

      state.password = payload.password;

    },

    changeUserName: function (state, { payload }) {

      state.userName = payload.username;

    },

  },

});

export const { changePassword, changeUserName } = UserSlice.actions;

export default UserSlice.reducer;

