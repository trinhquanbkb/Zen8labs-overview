import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import logoImg from "../assets/images/logo_chat.png";

// components
import Scrollbar from "./Scrollbar";
import { onMessage } from "firebase/messaging";
import { messaging } from "../firebase";
import { convertISOToDDMMYY } from "../utils/function";

// notifiaction continer styles
const notificationContainerStyle = {
  maxHeight: "300px",
  display: "none",
};

const notificationShowContainerStyle = {
  maxHeight: "300px",
};

interface INoti {
  title: string;
  body: string;
  created_at: Date;
}

interface NotificationDropdownProps {
  notifications: INoti[];
}

interface NotificationContainerStyle {
  maxHeight?: string;
  display?: string;
}

const NotificationDropdown = (props: NotificationDropdownProps) => {
  const [notifications, setNotifications] = useState<INoti[]>(
    props.notifications
  );
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

  onMessage(messaging, (payload: any) => {
    setNotifications([
      {
        created_at: new Date(),
        title: payload.notification.title,
        body: payload.notification.body,
      },
      ...notifications,
    ]);
  });

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
          {notifications.length}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown-menu-end dropdown-lg"
        style={{ width: "380px !important", border: "1px solid #e9e9e9" }}
      >
        <div onClick={toggleDropdown}>
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-end"></span>
              Notification
            </h5>
          </div>
          <Scrollbar style={notificationContentStyle}>
            {(notifications || []).map((item, i) => {
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
                    <p className="notify-details fw-bold mb-0 break-word-noti">
                      {item.title}
                      <span className="fw-normal" style={{ fontSize: "13px" }}>
                        {" ("}
                        {convertISOToDDMMYY(item.created_at.toString())} {")"}
                      </span>
                    </p>
                    <p className="text-muted mb-0 user-msg break-word-noti">
                      {item.body}
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
