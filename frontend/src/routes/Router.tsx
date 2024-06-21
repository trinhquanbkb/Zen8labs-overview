import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { authProtectedFlattenRoutes } from "./index";
import HorizontalLayout from "../layouts/Horizontal";
import Error404 from "../pages/error/Error404";

interface RoutesProps {}

const Router = (props: RoutesProps) => {
  let Layout = HorizontalLayout;

  return (
    <BrowserRouter>
      <Layout
        children={
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
            <Route path="*" element={<Error404 />} />
          </Routes>
        }
      ></Layout>
    </BrowserRouter>
  );
};

export default Router;
