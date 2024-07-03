import React, { startTransition, useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";
import FeatherIcons from "feather-icons-react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { initLoginUser } from "../../redux/auth/reducers";
import { AppDispatch, RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [cookies] = useCookies();

  const { error, user, loading } = useSelector((state: RootState) => ({
    user: state.Auth.login.data.user,
    loading: state.Auth.login.loading,
    error: state.Auth.login.error,
  }));

  useEffect(() => {
    if (user && !loading && !error && cookies.user_infor) {
      startTransition(() => {
        navigate("/chat");
      });
    } else {
      startTransition(() => {
        navigate("/auth/login");
      });
    }
  }, [user, loading, error, navigate, cookies]);

  const onSubmit = (formData: UserData) => {
    dispatch(
      initLoginUser({
        email: formData["email"],
        password: formData["password"],
      })
    );
  };

  const BottomLink = () => {
    return (
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted">Don't have an account?</p>
        </Col>
      </Row>
    );
  };

  return (
    <AuthLayout bottomLinks={<BottomLink />}>
      <h6 className="h5 mb-0 mt-3">Welcome back!</h6>
      <p className="text-muted mt-1 mb-4">
        Enter your email address and password to access.
      </p>

      {error && (
        <Alert variant="danger" className="my-2">
          {error}
        </Alert>
      )}

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        defaultValues={{ email: "zen8labs@gmail.com", password: "abcd1234" }}
        formClass="authentication-form"
      >
        <FormInput
          type="email"
          name="email"
          label={"Email Address"}
          startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
          placeholder={"hello@coderthemes.com"}
          containerClass={"mb-3"}
        />
        <FormInput
          type="password"
          name="password"
          label={"Password"}
          startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
          placeholder={"Enter your Password"}
          containerClass={"mb-3"}
          action={
            <Link
              to="/auth/forget-password"
              className="float-end text-muted text-unline-dashed ms-1"
              onClick={(event) => {
                event.preventDefault();
                startTransition(() => {
                  navigate("/auth/forget-password");
                });
              }}
            >
              Forgot your password?
            </Link>
          }
        ></FormInput>

        <div className="mb-3 text-center d-grid">
          <Button type="submit">Log In</Button>
        </div>
      </VerticalForm>

      <div className="py-3 text-center">
        <span className="fs-16 fw-bold">OR</span>
      </div>
      <Row>
        <Col xs={12} className="text-center">
          <div
            className="btn btn-white mb-2 mb-sm-0 me-1"
            onClick={async () => {
              window.open("http://localhost:3002/api/v1/auth/google", "_self");
            }}
          >
            <i className="uil uil-google icon-google me-2"></i>
            With Google
          </div>
          <div className="btn btn-white mb-2 mb-sm-0">
            <i className="uil uil-facebook me-2 icon-fb"></i>
            With Facebook
          </div>
        </Col>
      </Row>
    </AuthLayout>
  );
}
