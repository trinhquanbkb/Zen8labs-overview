import React, { useState, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export default function Chat() {
  const [mess, setMess] = useState<{ content: string; id: string }[]>([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  const socketRef = useRef<Socket | null>();

  useEffect(() => {
    const serverHost = process.env.REACT_APP_SERVER_HOST;
    if (!serverHost) {
      return;
    } else {
      socketRef.current = io(serverHost);

      socketRef.current.on("connect", () => {
        setId(String(socketRef.current!.id));
      });

      socketRef.current.on("sendDataServer", (dataGot) => {
        setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      });

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
      };
    }
  }, []);

  const sendMessage = () => {
    if (message) {
      const msg = {
        content: message,
        id: id,
        receiver: 'bsdbas'
      };
      if (socketRef.current) {
        socketRef.current.emit("sendDataClient", msg);
        setMessage("");
      }
    }
  };

  const renderMess = () => {
    return mess.map((m, index) => {
      if (m.id === id) {
        return (
          <div className="d-flex justify-content-start">
            <div
              key={index}
              className={`${
                m.id === id ? "your-message" : "other-people"
              } chat-item`}
            >
              {m.content}
            </div>
          </div>
        );
      } else {
        return (
          <div className="d-flex justify-content-end">
            <div
              key={index}
              className={`${
                m.id === id ? "your-message" : "other-people"
              } chat-item`}
            >
              {m.content}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-socket d-flex flex-column justify-content-between">
        <div className="box-chat_message">{renderMess()}</div>
        <form id="form" className="form-input-chat" action="">
          <input
            id="input"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              sendMessage();
              e.preventDefault();
              setMessage("");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
