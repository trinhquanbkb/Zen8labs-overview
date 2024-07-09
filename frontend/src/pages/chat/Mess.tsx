import React from "react";
import { IMess } from "./Chat";
import {
  convertISOToDDMMYY,
  getTimeChat,
  isDifferentDay,
} from "../../utils/function";

interface IMessUser {
  sender: IMess;
  userId: number | null | undefined;
  index: number;
  mess: IMess[];
}

export default function Mess({ sender, userId, index, mess }: IMessUser) {
  return (
    <div key={index}>
      <div
        className={`d-flex ${
          sender.sender_id !== userId
            ? "justify-content-end"
            : "justify-content-start"
        }`}
      >
        <div className="d-flex flex-column" style={{ maxWidth: "60%" }}>
          {index === 0 ||
          (index > 0 && mess[index - 1].user.id !== mess[index].user.id) ? (
            <div className="time-mess">{mess[index].user.full_name}</div>
          ) : null}
          <div
            className={`${
              sender.sender_id !== userId ? "your-message" : "other-people"
            } chat-item break-word`}
          >
            {sender.message}
          </div>
          {index + 1 < mess.length ? (
            sender.updated_at &&
            (mess[index + 1].sender_id !== sender.sender_id ||
              isDifferentDay(sender.updated_at, mess[index + 1].updated_at)) ? (
              <div
                className={`time-mess mb-2 d-flex ${
                  sender.sender_id !== userId
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                {getTimeChat(sender.updated_at)}
              </div>
            ) : null
          ) : index + 1 === mess.length ? (
            <div
              className={`time-mess mb-2 d-flex ${
                sender.sender_id !== userId
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              {getTimeChat(sender.updated_at)}
            </div>
          ) : null}
        </div>
      </div>
      {index + 1 < mess.length ? (
        sender.updated_at &&
        isDifferentDay(sender.updated_at, mess[index + 1].updated_at) ? (
          <div className="w-100 position-relative my-4">
            <hr></hr>
            <h4>
              <span className="badge bg-light text-dark top-0 start-50 position-absolute translate-middle">
                {convertISOToDDMMYY(mess[index + 1].updated_at)}
              </span>
            </h4>
          </div>
        ) : null
      ) : null}
    </div>
  );
}
