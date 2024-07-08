import React, { startTransition, useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";
import FeatherIcons from "feather-icons-react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { initLoginUser } from "../../redux/auth/reducers";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRegisterMutation } from "../../api/authApi";
import { toast } from "react-toastify";

interface UserData {
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
}

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const [registerApi] = useRegisterMutation();

  const { error, user, loading } = useSelector((state: RootState) => ({
    user: state.Auth.login.data.user,
    loading: state.Auth.login.loading,
    error: state.Auth.login.error,
  }));

  useEffect(() => {
    if (!loading && !error && cookies.user_infor) {
      startTransition(() => {
        navigate("/chat");
      });
    } else {
      startTransition(() => {
        navigate("/auth/register");
      });
    }
  }, [user, loading, error, navigate, cookies]);

  const onSubmit = async (formData: UserData) => {
    if (formData.password === formData.confirm_password) {
      const result: any = await registerApi({
        email: formData.email,
        password: formData.password,
        first_name: formData.first_name,
        last_name: formData.last_name,
      });
      if (result.data) {
        toast.success("Welcome to Zen8labs!");
        dispatch(
          initLoginUser({
            email: formData["email"],
            password: formData["password"],
          })
        );
      } else if (result.error && result.error.data === "Email is exist") {
        toast.warning("Email is exist!");
      } else {
        toast.error("Error: Cannot register!");
      }
    } else {
      toast.warning("Confirm password not correct!");
    }
  };

  const BottomLink = () => {
    return (
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted">
            <a href={"/auth/login"} className="text-primary fw-bold ms-1">
              Sign In
            </a>
          </p>
        </Col>
      </Row>
    );
  };

  return (
    <AuthLayout bottomLinks={BottomLink()}>
      <h6 className="h5 mb-0 mt-3">Create your account</h6>
      <p className="text-muted mt-1 mb-4">
        Create a free account and start using Zen8labs
      </p>

      {error && (
        <Alert variant="danger" className="my-2">
          {error}
        </Alert>
      )}

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        formClass="authentication-form"
      >
        <FormInput
          type="text"
          name="first_name"
          label={"First name"}
          startIcon={<FeatherIcons icon={"user"} className="icon-dual" />}
          placeholder={"Nguyen Van"}
          containerClass={"mb-3"}
        ></FormInput>
        <FormInput
          type="text"
          name="last_name"
          label={"Last name"}
          startIcon={<FeatherIcons icon={"user"} className="icon-dual" />}
          placeholder={"A"}
          containerClass={"mb-3"}
        ></FormInput>
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
          placeholder={"Enter your password"}
          containerClass={"mb-3"}
        ></FormInput>
        <FormInput
          type="password"
          name="confirm_password"
          label={"Confirm password"}
          startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
          placeholder={"Enter your password confirm"}
          containerClass={"mb-3"}
        ></FormInput>

        <div className="mb-3 text-center d-grid">
          <Button type="submit">Confirm</Button>
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
              window.open(
                `${process.env.REACT_APP_SERVER_HOST}/auth/google`,
                "_self"
              );
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
