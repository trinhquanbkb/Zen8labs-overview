import { AxiosResponse } from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LoginRequest } from "../../api/authApi";
import { setCredentials } from "../../utils/setCredentials";
import { initLoginUser, loginUserFailed, loginUserSuccess } from "./reducers";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

/**
 * Login the user
 * @param {*} payload - username and password
 */

export const setSession = (key?: string, value?: any, httpOnly?: boolean) => {
  let cookies = new Cookies();
  if (key && value)
    cookies.set(key, value, {
      path: "/",
      sameSite: "lax",
      secure: false,
      httpOnly: httpOnly,
    });
  else {
    cookies.remove("user_infor", { path: "/" });
    cookies.remove("refresh_token", { path: "/" });
    cookies.remove("access_token", { path: "/" });
  }
};

function* login(action: { payload: { email: string; password: string } }) {
  try {
    const authResponse: AxiosResponse = yield call(
      LoginRequest,
      action.payload.email,
      action.payload.password
    );
    const { access_token, refresh_token } = authResponse.data.token;
    setCredentials({
      access_token: access_token,
      refresh_token: refresh_token,
      user_infor: jwtDecode(access_token),
    });
    yield put(loginUserSuccess(jwtDecode(access_token)));
  } catch (err: any) {
    yield put(loginUserFailed(err.response.data));
    setSession();
  }
}

export function* watchLoginUser() {
  yield takeEvery(initLoginUser, login);
}

function* authSaga() {
  yield all([fork(watchLoginUser)]);
}

export default authSaga;
