import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

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
  return (
    <React.Fragment>
      <div className={`navbar-custom`}>
        <div className={`container-full`}>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
