import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ActionLogout = () => {
  const [cookies] = useCookies();
  const accessToken = cookies.access_token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth/login");
    } else {
      navigate("/chat");
    }
  }, [cookies, accessToken, navigate]);

  return null;
};

export default ActionLogout;
