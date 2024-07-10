//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getAccessToken, getRefreshToken } from "./utils/getToken";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;

      if (
        err.response.status === 401 &&
        err.config &&
        err.response.data.name === "TokenExpiredError"
      ) {
        let res = fetch(axios.defaults.baseURL + "/auth/refresh-token", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
          body: JSON.stringify({
            refresh_token: getRefreshToken(),
          }),
          redirect: "follow",
          referrer: "no-referrer",
        })
          .then((res) => res.json())
          .then((res) => {
            let cookies = new Cookies();
            if (res.token) {
              cookies.set("access_token", res.token.access_token, {
                path: "/",
              });
              cookies.set("user", jwtDecode(res.token.access_token), {
                path: "/",
              });
              cookies.set("refresh_token", res.token.refresh_token, {
                path: "/",
              });
            }
            originalReq.headers[
              "Authorization"
            ] = `Bearer ${res.token.access_token}`;
            return axios(originalReq);
          })
          .catch((error) => console.log(error));
        resolve(res);
      } else if (
        err.response.status === 403 &&
        err.response.data.message === "Permission denied"
      ) {
        toast.error("Bạn không có quyền thực hiện chức năng này!");
      } else {
        throw err;
      }
      reject(err);
    });
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
