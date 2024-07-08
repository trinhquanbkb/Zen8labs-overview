import React, { useState } from "react";
import logoImg from "../../assets/images/logo_chat.png";
import { IUser } from "../../interfaces/users";
import classNames from "classnames";
import { Dropdown } from "react-bootstrap";

interface ITopMessageBox {
  receiver: IUser | null | undefined;
  online: boolean;
}

export default function TopMessageBox({ receiver, online }: ITopMessageBox) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {receiver ? (
        <div className="top-chat d-flex justify-content-between p-2">
          <div className="d-flex justify-content-start">
            <div style={{ position: "relative" }}>
              <span
                className={classNames("user-status-top-message", {
                  "bg-success": online === true,
                  "bg-secondary": online === false,
                })}
              ></span>
              <img
                src={receiver.avatar ? receiver.avatar : logoImg}
                alt="logo"
                className="rounded-circle avatar-sm"
              />
            </div>
            <div className="ps-2 fw-bold">
              <p className="mb-0">
                {receiver?.first_name + " " + receiver?.last_name}
              </p>
              <p className="mb-0 fw-light fs-8">
                {online ? "online" : "offline"}
              </p>
            </div>
          </div>
          <Dropdown
            show={dropdownOpen}
            as="li"
            onToggle={toggleDropdown}
            className="list-inline-item fs-18"
          >
            <Dropdown.Toggle
              id="dropdown-apps"
              as="a"
              onClick={toggleDropdown}
              className={classNames("text-dark", "cursor-pointer", {
                show: dropdownOpen,
              })}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item href="#/">
                <i className="bi bi-people fs-16 me-2"></i>New Group
              </Dropdown.Item>
              <Dropdown.Item href="#/">
                <i className="bi bi-person-lines-fill fs-16 me-2"></i>
                Information
              </Dropdown.Item>
              <Dropdown.Item href="#/">
                <i className="bi bi-person-plus fs-16 me-2"></i>Invite Friends
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : null}
    </div>
  );
}
