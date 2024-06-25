import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");

export const LoginRequest = async (username: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
    {
      email: username,
      password,
    }
  );
  return response;
};
