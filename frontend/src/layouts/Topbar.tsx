import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Cookies } from "react-cookie";
import { startTransition } from "react";

// images
import logoImg from "../assets/images/logo_zen8.png";

export interface NotificationItem {
  id: number;
  text: string;
  subText: string;
  icon?: string;
  avatar?: string;
  bgColor?: string;
}

interface TopbarProps {
  topbarDark: boolean;
}

const Topbar = ({ topbarDark }: TopbarProps) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={`navbar-custom`}>
        <div
          className={`container-full d-flex flex-row justify-content-between`}
        >
          <ul className="list-unstyled topnav-menu topnav-menu-left float-start m-0 ps-4 pt-1">
            <li>
              <img
                src={logoImg}
                alt="logo"
                className="rounded-circle avatar-md"
              />
            </li>
            <li>
              <Link
                to="#"
                className={classNames("navbar-toggle nav-link")}
                onClick={() => {
                  // openLeftMenuCallBack();
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="w-100 d-flex justify-content-end me-4">
            <div
              className="d-flex flex-column justify-content-center text-light cursor-pointer"
              onClick={() => {
                let cookies = new Cookies();
                cookies.remove("refresh_token", { path: "/" });
                cookies.remove("access_token", { path: "/" });

                startTransition(() => {
                  navigate("/auth/login");
                });
              }}
            >
              Log out
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
