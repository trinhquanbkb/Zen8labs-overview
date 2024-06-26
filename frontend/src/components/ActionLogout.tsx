import { useEffect } from "react";
import { getAccessToken } from "../utils/getAccessToken";
import { useNavigate } from "react-router-dom";

const ActionLogout = () => {
  const access_token = getAccessToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!access_token) {
      navigate("/auth/login");
    }
  }, [access_token, navigate]);

  return null;
};

export default ActionLogout;
