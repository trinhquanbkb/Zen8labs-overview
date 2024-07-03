import React, { startTransition } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import logoImg from "../../assets/images/logo_zen8.png";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../api/authApi";

interface UserData {
  newPassword: string;
  retypeNewPassword: string;
}

export default function ForgetPassword() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();

  const BottomLink = () => {
    return (
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted">
            Back to
            <Link
              to={"/auth/login"}
              onClick={() => {
                startTransition(() => {
                  navigate("/auth/login");
                });
              }}
              className="text-primary fw-bold ms-1"
            >
              Login
            </Link>
          </p>
        </Col>
      </Row>
    );
  };

  const onSubmit = async (formData: UserData) => {
    if (formData.newPassword === formData.retypeNewPassword) {
      const res = await resetPassword({
        newPassword: formData.newPassword,
        code: code as string,
      });

      if (res.data === "Change password success!") {
        toast.success("Change password success, please login!");
        startTransition(() => {
          navigate("/auth/login");
        });
      } else {
        toast.error("Change password error!");
      }
    } else {
      toast.error("The two passwords are not the same!");
    }
  };

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto">
          <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src={logoImg} alt="" height="64" />
            </span>
          </Link>
        </div>

        <h6 className="h5 mb-0 mt-3">Reset Password</h6>
        <p className="text-muted mt-1 mb-4">
          Enter a new password to complete the authentication process!
        </p>

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          defaultValues={{}}
          formClass="authentication-form"
        >
          <FormInput
            label={"New Password"}
            type="text"
            name="newPassword"
            placeholder={"********"}
            containerClass={"mb-3"}
          />

          <FormInput
            label={"Retype new password"}
            type="text"
            name="retypeNewPassword"
            placeholder={"********"}
            containerClass={"mb-3"}
          />

          <div className="mb-0 text-center">
            <Button className="w-100" type="submit">
              Submit
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
}
