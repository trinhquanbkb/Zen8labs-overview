import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { api } from ".";

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

export const GoogleAuth = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_HOST}/auth/google`,
    {
      withCredentials: true,
    }
  );
  return response;
};

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendMailForgetPassword: build.mutation<any, { mail: string }>({
      query: (data) => ({
        url: "/auth/send-mail-forget-password",
        method: "POST",
        data,
      }),
    }),
    checkCodeForgetPassword: build.mutation<any, { code: string }>({
      query: (data) => ({
        url: "/auth/check-code-forget-password",
        method: "POST",
        data,
      }),
    }),
    resetPassword: build.mutation<any, { code: string; newPassword: string }>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
    }),
    register: build.mutation<
      any,
      { email: string; password: string; first_name: string; last_name: string }
    >({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useSendMailForgetPasswordMutation,
  useCheckCodeForgetPasswordMutation,
  useResetPasswordMutation,
  useRegisterMutation,
} = authApi;
