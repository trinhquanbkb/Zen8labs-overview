import React from "react";
import logoImg from "../../assets/images/logo_chat.png";
import { IUser } from "../../interfaces/users";
import classNames from "classnames";

interface ITopMessageBox {
  receiver: IUser | null | undefined;
  online: boolean;
}

export default function TopMessageBox({ receiver, online }: ITopMessageBox) {
  return (
    <div>
      {receiver ? (
        <div className="top-chat d-flex justify-content-start p-2">
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
            <p className="mb-0 fw-light fs-8">{online ? "online" : "offline"}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
