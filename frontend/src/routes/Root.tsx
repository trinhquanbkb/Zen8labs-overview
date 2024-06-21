import React from "react";
import { Navigate } from "react-router-dom";
// import { isUserAuthenticated } from "../utils/authUtils";

const Root = () => {
  const getRootUrl = () => {
    let url: string = "auth/login";

    // check if user logged in or not and return url accordingly
    // if (isUserAuthenticated() === false) {
    // 	url = "auth/login";
    // } else {
    // 	url = "tracking/search";
    // }
    return url;
  };

  const url = getRootUrl();

  return <Navigate to={`/${url}`} />;
};

export default Root;
