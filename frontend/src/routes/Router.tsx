import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
} from "./index";
import HorizontalLayout from "../layouts/Horizontal";
import Error404 from "../pages/error/Error404";
import ActionLogout from "../components/ActionLogout";
import Loading from "../components/Loading";

interface RoutesProps {}

const Router = (props: RoutesProps) => {
  let Layout = HorizontalLayout;

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ActionLogout />
        <Routes>
          {authProtectedFlattenRoutes.map((route: any, index: number) => {
            const component = route.component as React.ComponentType;
            return (
              <Route
                key={index}
                path={route.path}
                element={React.createElement(component)}
              />
            );
          })}
          {publicProtectedFlattenRoutes.map((route: any, index: number) => {
            const Component = route.component as React.ComponentType;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
