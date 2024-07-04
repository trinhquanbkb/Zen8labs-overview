import React from "react";
import { Col, Row } from "react-bootstrap";
import logoImg from "../../assets/images/logo_chat.png";
import classNames from "classnames";

export interface IUserMessage {
  avatar?: string | null;
  name: string;
  chat?: string | null;
  onChooseUser: any;
  online: boolean;
}

export default function UserMessage({
  avatar,
  name,
  chat,
  onChooseUser,
  online,
}: IUserMessage) {
  return (
    <>
      <Row
        className="ps-1 pe-3 py-2 chat-user-item m-1"
        onClick={() => {
          onChooseUser();
        }}
      >
        <Col xs={2} className="d-flex justify-content-center">
          {" "}
          <span
            className={classNames("user-status", {
              "bg-success": online === true,
              "bg-secondary": online === false,
            })}
          ></span>
          <img
            src={avatar ? avatar : logoImg}
            alt="logo"
            className="rounded-circle avatar"
          />
        </Col>
        <Col xs={10} className="d-flex flex-column justify-content-start">
          <p className="chat-name mb-1">{name}</p>
          <p className="chat-content fw-normal m-0">
            {chat
              ? chat
              : "quanTooi la quanTooi la quanTooi la quanTooi la quanTooi la quanTooi la quanTooi la"}
          </p>
        </Col>
      </Row>
    </>
  );
}
