import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import logoImg from "../assets/images/logo_chat.png";

// types
import { NotificationItem } from "../layouts/Topbar";

// components
import Scrollbar from "./Scrollbar";

// notifiaction continer styles
const notificationContainerStyle = {
  maxHeight: "300px",
  display: "none",
};

const notificationShowContainerStyle = {
  maxHeight: "300px",
};

interface NotificationDropdownProps {
  notifications: Array<NotificationItem>;
}

interface NotificationContainerStyle {
  maxHeight?: string;
  display?: string;
}

const NotificationDropdown = (props: NotificationDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [notificationContentStyle, setNotificationContentStyles] =
    useState<NotificationContainerStyle>(notificationContainerStyle);

  /*
   * toggle notification-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setNotificationContentStyles(
      notificationContentStyle === notificationContainerStyle
        ? notificationShowContainerStyle
        : notificationContainerStyle
    );
  };

  return (
    <Dropdown
      show={dropdownOpen}
      onToggle={toggleDropdown}
      className="d-flex flex-column justify-content-center"
    >
      <Dropdown.Toggle
        id="dropdown-notification"
        as="a"
        onClick={toggleDropdown}
        className={classNames(
          "nav-link",
          "position-relative",
          "cursor-pointer",
          "me-2",
          {
            show: dropdownOpen,
          }
        )}
      >
        <FeatherIcon icon="bell" className="icon-dual icon-sm" />
        <span
          className="badge bg-danger rounded-circle noti-icon-badge position-absolute"
          style={{ right: "-6px", top: "-6px" }}
        >
          6
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown-menu-end dropdown-lg"
        style={{ width: "320px !important", border: "1px solid #e9e9e9" }}
      >
        <div onClick={toggleDropdown}>
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-end"></span>
              Notification
            </h5>
          </div>
          <Scrollbar style={notificationContentStyle}>
            {(props.notifications || []).map((item, i) => {
              return (
                <Link
                  to="#"
                  className="dropdown-item notify-item d-flex flex-row justify-content-start py-2 border-bottom-wheat"
                  key={i + "-noti"}
                >
                  <div className="notify-icon">
                    <img
                      src={logoImg}
                      alt=""
                      className="rounded-circle icon-lg"
                    />
                  </div>
                  <div className="d-flex flex-column ms-2">
                    <p className="notify-details fw-bold mb-1">Nguời gửi</p>
                    <p className="text-muted mb-0 user-msg break-word-noti">
                      Hello Hello Hello Hello Hello Hello Hello Hello Hello
                      Hello Hello Hello
                    </p>
                  </div>
                </Link>
              );
            })}
          </Scrollbar>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
