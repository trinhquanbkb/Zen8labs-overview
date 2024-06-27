import { Cookies } from "react-cookie";

export const setCredentials = (
  credentials: {
    access_token: string;
    refresh_token: string;
    user_infor: any;
  } | null
) => {
  let cookies = new Cookies();
  if (credentials) {
    cookies.set("user_infor", JSON.stringify(credentials.user_infor), {
      path: "/",
    });
    cookies.set("access_token", credentials.access_token, { path: "/" });
    cookies.set("refresh_token", credentials.refresh_token, { path: "/" });
  } else {
    cookies.remove("user_infor");
    cookies.remove("access_token");
    cookies.remove("refresh_token");
  }
};
