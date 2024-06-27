import React from "react";
import logoImg from "../../assets/images/logo_chat.png";
import { IUser } from "../../interfaces/users";

interface ITopMessageBox {
  receiver: IUser | null | undefined;
}

export default function TopMessageBox({ receiver }: ITopMessageBox) {
  return (
    <div>
      {receiver ? (
        <div className="top-chat d-flex justify-content-start p-2">
          <img
            src={receiver.avatar ? receiver.avatar : logoImg}
            alt="logo"
            className="rounded-circle avatar-sm"
          />
          <div className="ps-2 fw-bold">{receiver?.first_name + " " + receiver?.last_name}</div>
        </div>
      ) : null}
    </div>
  );
}
