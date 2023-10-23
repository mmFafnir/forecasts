import { Status } from "@/types/Status";
import { createSlice } from "@reduxjs/toolkit";
import { postUserAuthRegister } from "./asyncActions";
import { TUser } from "@/types/typesUser";

interface IState {
  data: TUser | null;
  status: Status;
}

const initialState: IState = {
  data: null,
  status: Status.DEFAULT,
};

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatusDefault: (state) => {
      state.status = Status.DEFAULT;
    },

    logout: (state) => {
      state.data = null;
      window.localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    //Register
    builder.addCase(postUserAuthRegister.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(postUserAuthRegister.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(postUserAuthRegister.rejected, (state) => {
      state.status = Status.ERROR;
      alert("Не удалось авторизоваться");
    });
  },
});

export const { logout, setAuthStatusDefault } = userAuthSlice.actions;

export default userAuthSlice.reducer;
