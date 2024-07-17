import { Cookies } from "react-cookie";

/**
 * Returns the logged in user
 */
export const getAccessToken = () => {
  const cookies = new Cookies();
  console.log(cookies);
  console.log(cookies.get("access_token"));
  const accessToken = cookies.get("access_token");
  return accessToken ? accessToken : null;
};

export const getRefreshToken = () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refresh_token");
  return refreshToken ? refreshToken : null;
};
