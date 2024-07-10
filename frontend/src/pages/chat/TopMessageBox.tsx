import React, { useState } from "react";
import { IReceiver } from "./Chat";
import { Dropdown } from "react-bootstrap";
import logoImg from "../../assets/images/logo_chat.png";
import classNames from "classnames";
import ModalInformationUser from "./Modals/ModalInformationUser";
import ModalInvite from "./Modals/ModalInvite";
import ModalViewUser from "./Modals/ModalViewUser";
import ModalDeleteGroup from "./Modals/ModalDeleteGroup";

interface ITopMessageBox {
  receiver: IReceiver;
  online: boolean;
  deleteGroupSuccess: any;
}

export default function TopMessageBox({
  receiver,
  online,
  deleteGroupSuccess,
}: ITopMessageBox) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [showModalInformation, setShowModalInformation] =
    useState<boolean>(false);
  const [showModalInvite, setShowModalInvite] = useState<boolean>(false);
  const [showModalViewUser, setShowModalViewUser] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {receiver ? (
        <>
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
                <p className="mb-0">{receiver?.name}</p>
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
                {receiver.isGroup ? (
                  <>
                    <Dropdown.Item onClick={() => setShowModalViewUser(true)}>
                      <i className="bi bi-person fs-16 me-2"></i>View users
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowModalInvite(true)}>
                      <i className="bi bi-person-plus fs-16 me-2"></i>Invite
                      friends
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowModalDelete(true)}>
                      <i className="bi bi-arrow-return-left fs-16 me-2"></i>Out group
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      onClick={() => setShowModalInformation(true)}
                    >
                      <i className="bi bi-person-lines-fill fs-16 me-2"></i>
                      Information
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      ) : null}

      <ModalInformationUser
        id={receiver.id}
        show={showModalInformation}
        handleShow={(value: boolean) => setShowModalInformation(value)}
      />

      <ModalInvite
        groupId={receiver.groupId}
        show={showModalInvite}
        handleShow={(value: boolean) => setShowModalInvite(value)}
      />

      <ModalViewUser
        groupId={receiver.groupId}
        show={showModalViewUser}
        handleShow={(value: boolean) => setShowModalViewUser(value)}
      />

      <ModalDeleteGroup
        groupId={receiver.groupId}
        show={showModalDelete}
        handleShow={(value: boolean) => setShowModalDelete(value)}
        handleOutGroup={() => deleteGroupSuccess()}
      />
    </div>
  );
}
