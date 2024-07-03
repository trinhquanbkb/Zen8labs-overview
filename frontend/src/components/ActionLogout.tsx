import { startTransition, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ActionLogout = () => {
  const [cookies] = useCookies();
  const accessToken = cookies.access_token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && window.location.href.includes("/auth/login")) {
      startTransition(() => {
        navigate("/auth/login");
      });
    }
  }, [cookies, accessToken, navigate]);

  return null;
};

export default ActionLogout;
