import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

interface AuthStateType {
  error: any;
  userSignUp: any;
  loading: any;
  login: {
    loading: boolean;
    data: {
      data?: AxiosResponse;
      user: any;
    };
    error?: string;
  };
  logout: {
    loading: boolean;
    error?: AxiosError;
  };
  tokenVerifyPassword: string;
}
const AuthInitialStates: AuthStateType = {
  login: {
    loading: false,
    data: {
      user: null,
    },
  },
  logout: {
    loading: false,
  },
  error: undefined,
  userSignUp: undefined,
  loading: undefined,
  tokenVerifyPassword: "",
};

const Auth = createSlice({
  name: "auth",
  initialState: AuthInitialStates,
  reducers: {
    initLoginUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.login.loading = true;
    },
    loginUserSuccess: (state, action) => {
      state.login.data.user = action.payload;
      state.login.loading = false;
      state.login.error = undefined;
    },
    loginUserFailed: (state, action: any) => {
      if (action.payload.includes("Email is not exist")) {
        state.login.error = "Email không hợp lệ!";
      } else if (action.payload.includes("Password is not exist")) {
        state.login.error = "Mật khẩu không hợp lệ!";
      } else if (action.payload) {
        state.login.error = action.payload;
      } else {
        state.login.error = "Lỗi server!";
      }
      state.login.loading = false;
    },
    verifyTokenForgotPassword: (
      state,
      action: PayloadAction<{ token: string }>
    ) => {
      state.tokenVerifyPassword = action.payload.token;
    },
  },
});

// Actions
export const {
  initLoginUser,
  loginUserSuccess,
  loginUserFailed,
  verifyTokenForgotPassword,
} = Auth.actions;

// Selectors
export const selectUser = (state: AuthStateType) => state.login.data.user;
export const selectLoginUser = (state: AuthStateType) => state.login;
export const selectLogoutUser = (state: AuthStateType) => state.logout;

// Reducer
export default Auth.reducer;
