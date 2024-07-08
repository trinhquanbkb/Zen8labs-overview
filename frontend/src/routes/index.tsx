import React from "react";
import { Route, RouteProps } from "react-router-dom";

// root
const Root = React.lazy(() => import("./Root"));

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Forgetpassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const CheckCode = React.lazy(() => import("../pages/auth/CheckCode"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));

//error
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));

//pages
const Chat = React.lazy(() => import("../pages/chat/Chat"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  component?: any;
  route?: any;
  icon?: string;
  header?: string;
  roles?: string[];
  action?: string;
  children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
  path: "/",
  component: Root,
  route: Route,
};

// app
const projectAppRoutes: RoutesProps[] = [
  {
    path: "/chat",
    name: "Chat",
    route: Route,
    icon: "chat",
    component: Chat,
  },
];

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget password",
    component: Forgetpassword,
    route: Route,
  },
  {
    path: "/auth/check-code/:code",
    name: "Check code",
    component: CheckCode,
    route: Route,
  },
  {
    path: "/auth/reset-password/:code",
    name: "Reset password",
    component: ResetPassword,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    component: Register,
    route: Route,
  },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/error-404",
    name: "Error - 404",
    component: Error404,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    component: Error500,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const publicRoutes = [rootRoute, ...projectAppRoutes, ...authRoutes];
const authProtectedRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  authProtectedFlattenRoutes,
  authProtectedRoutes,
  publicProtectedFlattenRoutes,
  publicRoutes,
};
