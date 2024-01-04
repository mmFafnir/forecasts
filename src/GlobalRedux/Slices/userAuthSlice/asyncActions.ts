import { TUser, TUserRegister } from "@/types/typesUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/core/axios";

export const postUserAuthRegister = createAsyncThunk<TUser, TUserRegister>(
  "auth/postUserAuthRegister",
  async (params) => {
    const { data } = await axios.post("app/register", params);
    console.log(data);
    return data;
  }
);
