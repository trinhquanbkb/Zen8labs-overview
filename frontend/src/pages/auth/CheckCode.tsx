import React, { startTransition, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCheckCodeForgetPasswordMutation } from "../../api/authApi";
import Loading from "../../components/Loading";

export default function CheckCode() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [apiCheckCode] = useCheckCodeForgetPasswordMutation();

  const checkCode = async () => {
    const res = await apiCheckCode({ code: code as string });
    if (res.data === "Verify code success!") {
      startTransition(() => {
        navigate(`/auth/reset-password/${code}`);
      });
    } else {
      startTransition(() => {
        navigate("/auth/forget-password");
      });
    }
  };

  useEffect(() => {
    checkCode();
  }, []);

  return <Loading />;
}
