import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";
import FeatherIcons from "feather-icons-react";

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const onSubmit = (formData: UserData) => {};

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
        Enter your email address and password to access admin panel.
      </p>

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        defaultValues={{ email: "zen8labs.com", password: "test" }}
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
        //   action={
            // <Link
            //   to="/auth/forget-password"
            //   className="float-end text-muted text-unline-dashed ms-1"
            // >
            //   {t("Forgot your password?")}
            // </Link>
        //   }
          placeholder={"Enter your Password"}
          containerClass={"mb-3"}
        ></FormInput>

        <FormInput
          type="checkbox"
          name="checkbox"
          label={"Remember me"}
          containerClass={"mb-3"}
          defaultChecked
        />

        <div className="mb-3 text-center d-grid">
          <Button type="submit">Log In</Button>
        </div>
      </VerticalForm>

      <div className="py-3 text-center">
        <span className="fs-16 fw-bold">OR</span>
      </div>
      <Row>
        <Col xs={12} className="text-center">
          <div className="btn btn-white mb-2 mb-sm-0 me-1">
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
