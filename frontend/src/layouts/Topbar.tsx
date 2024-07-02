import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// images
import logoImg from "../assets/images/logo_zen8.png";
import profilePic from "../assets/images/users/avatar-1.jpg";
import ProfileDropdown from "../components/ProfileDropdown";
import { ProfileMenus } from "../constants/menu";
import { useCookies } from "react-cookie";
import { truncateString } from "../utils/function";
import { UserInforCookie } from "../interfaces/users";

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
  const [cookies] = useCookies();
  const [userInfor, setUserInfor] = useState<UserInforCookie>();

  useEffect(() => {
    setUserInfor(cookies ? cookies.user_infor : null);
  }, [cookies]);

  return (
    <React.Fragment>
      <div className={`navbar-custom`}>
        <div
          className={`container-full d-flex flex-row justify-content-between`}
        >
          <ul className="list-unstyled topnav-menu topnav-menu-left float-start m-0 ps-4">
            <li>
              <img src={logoImg} alt="logo" style={{ height: "68px" }} />
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
            <div className="d-flex flex-column justify-content-center text-light cursor-pointer">
              <ProfileDropdown
                profilePic={profilePic}
                menuItems={ProfileMenus}
                username={truncateString(
                  userInfor?.first_name + " " + userInfor?.last_name,
                  15
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
