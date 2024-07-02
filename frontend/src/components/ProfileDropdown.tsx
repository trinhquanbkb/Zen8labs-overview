import React, { startTransition, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import { Cookies } from "react-cookie";

interface ProfileMenuItem {
  label: string;
  icon: string;
  redirectTo: string;
}

interface ProfileDropdownProps {
  menuItems: Array<ProfileMenuItem>;
  profilePic?: string;
  username: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
  const navigate = useNavigate();
  const profilePic = props.profilePic || null;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle profile-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-profile"
        as="a"
        onClick={toggleDropdown}
        className={classNames(
          "nav-link",
          "nav-user",
          "me-0",
          "cursor-pointer",
          { show: dropdownOpen }
        )}
      >
        <img src={profilePic!} className="rounded-circle" alt="" />
        <span className="pro-user-name ms-2 text-dark">
          {props.username} <i className="uil uil-angle-down"></i>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
        <div onClick={toggleDropdown}>
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
          </div>
          {(props.menuItems || []).map((item, i) => {
            if (item.label === "Logout") {
              return (
                <React.Fragment key={i}>
                  {i === props.menuItems.length - 1 && (
                    <div className="dropdown-divider"></div>
                  )}
                  <Link
                    to={item.redirectTo}
                    className="dropdown-item notify-item"
                    key={i + "-profile-menu"}
                    onClick={() => {
                      let cookies = new Cookies();
                      cookies.remove("refresh_token", { path: "/" });
                      cookies.remove("access_token", { path: "/" });
                      cookies.remove("user_infor", { path: "/" });
                      localStorage.clear();

                      startTransition(() => {
                        navigate("/auth/login");
                      });
                    }}
                  >
                    <FeatherIcon
                      icon={item.icon}
                      className="icon-dual icon-xs me-1"
                    />
                    <span>{item.label}</span>
                  </Link>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={i}>
                  {i === props.menuItems.length - 1 && (
                    <div className="dropdown-divider"></div>
                  )}
                  <Link
                    to={item.redirectTo}
                    className="dropdown-item notify-item"
                    key={i + "-profile-menu"}
                  >
                    <FeatherIcon
                      icon={item.icon}
                      className="icon-dual icon-xs me-1"
                    />
                    <span>{item.label}</span>
                  </Link>
                </React.Fragment>
              );
            }
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
