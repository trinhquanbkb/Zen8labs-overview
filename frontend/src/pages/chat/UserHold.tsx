import React from "react";
import profilePic from "../../assets/images/users/avatar-1.jpg";

interface IUserHold {
  name: string;
}

export default function UserHold({ name }: IUserHold) {
  return (
    <div
      className="d-flex pb-2 align-items-center"
      style={{ borderBottom: "1px solid #c9c9c9" }}
    >
      <img
        src={profilePic}
        className="me-2 rounded-circle"
        height="48"
        alt=""
      />
      <div>
        <h5 className="my-0 fs-14">{name}</h5>
      </div>
    </div>
  );
}
