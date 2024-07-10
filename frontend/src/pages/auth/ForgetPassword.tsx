import React, { startTransition } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import logoImg from "../../assets/images/logo_zen8.png";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";
import FeatherIcons from "feather-icons-react";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSendMailForgetPasswordMutation } from "../../api/authApi";

interface UserData {
  email: string;
}

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [apiSendMail] = useSendMailForgetPasswordMutation();

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
    toast.promise(
      async () => {
        await apiSendMail({ mail: formData.email });
      },
      {
        pending: "Promise is pending",
        success: "Send email success!",
        error: "Send email error!",
      }
    );
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
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          defaultValues={{}}
          formClass="authentication-form"
        >
          <FormInput
            label={"Email Address"}
            type="email"
            name="email"
            startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
            placeholder={"abcd@coderthemes.com"}
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
