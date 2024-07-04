import React, { useState, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useCookies } from "react-cookie";
import { Col, Row } from "react-bootstrap";
import { useGetAllUsersQuery } from "../../api/userApi";
import UserMessage from "./UserMessage";
import { IUser } from "../../interfaces/users";
import MessageBox from "./MessageBox";
import TopMessageBox from "./TopMessageBox";
import { useGetMessageInConversationQuery } from "../../api/messageApi";
import Loading from "../../components/Loading";

interface IMess {
  message: string | null | undefined;
  receiver_id: number | null | undefined;
  sender_id: number | null | undefined;
}

export default function Chat() {
  // ref
  const chatContainerRef = useRef<any>();
  const socketRef = useRef<Socket | null>();

  // cookie
  const [cookies] = useCookies();

  // state
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [userId, setUserId] = useState<number | null>();
  const [mess, setMess] = useState<IMess[]>([]);
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState<IUser>();
  const [offset, setOffset] = useState<number>(0);
  const [id, setId] = useState("");

  // fetch data
  const { data, isFetching } = useGetAllUsersQuery();
  const { data: dataMessage, isFetching: fetchingMessage } =
    useGetMessageInConversationQuery({
      user_id_1: userId ?? 0,
      user_id_2: receiver?.id ?? 0,
      offset: offset,
    });

  useEffect(() => {
    const serverSocket = process.env.REACT_APP_SERVER_SOCKET;
    if (!serverSocket) {
      return;
    } else {
      socketRef.current = io(serverSocket);
      socketRef.current.on("connect", () => {
        setId(String(socketRef.current!.id));
      });
      socketRef.current.on("sendDataServer", (dataGot) => {
        setMess((oldMsgs) => [...oldMsgs, dataGot]);
      });

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (data && userId && socketRef.current) {
      const conversations = data.find((d) => d.id === userId);
      conversations?.converstations_id.forEach((conver: number) => {
        if (socketRef.current) {
          socketRef.current.emit("joinRoom", conver);
        }
      });
    }
  }, [data, userId]);

  useEffect(() => {
    if (
      !fetchingMessage &&
      dataMessage &&
      dataMessage.data.length > 0 &&
      receiver
    ) {
      const messConvert: IMess[] = dataMessage.data.map((m) => {
        return {
          message: m.content,
          receiver_id: receiver?.id,
          sender_id: m.user_id,
        };
      });

      setMess([...messConvert.reverse(), ...mess]);
    }
  }, [fetchingMessage, receiver]);

  useEffect(() => {
    if (chatContainerRef.current && mess.length > 0) {
      const previousScrollHeight = chatContainerRef.current?.scrollHeight;
      setScrollHeight(previousScrollHeight);
      chatContainerRef.current.scrollTop =
        scrollHeight === 0
          ? previousScrollHeight
          : previousScrollHeight - scrollHeight;
    }
  }, [mess]);

  useEffect(() => {
    setUserId(cookies.user_infor ? cookies.user_infor.id : null);
  }, [cookies]);

  const handleScroll = (event: any) => {
    if (event.target.scrollTop === 0) {
      setOffset(offset + 1);
    }
  };

  const sendMessage = () => {
    if (message) {
      const msg = {
        message: message,
        sender_id: userId,
        receiver_id: receiver ? receiver.id : null,
      };
      if (socketRef.current) {
        socketRef.current.emit("sendDataClient", msg);
        setMessage("");
      }
    }
  };

  const renderMess = () => {
    return mess.map((m, index) => {
      if (m.receiver_id !== userId) {
        return (
          <div className="d-flex justify-content-start">
            <div key={index} className={`other-people chat-item break-word`}>
              {m.message}
            </div>
          </div>
        );
      } else {
        return (
          <div className="d-flex justify-content-end">
            <div key={index} className={`your-message chat-item break-word`}>
              {m.message}
            </div>
          </div>
        );
      }
    });
  };

  return (
    <>
      <Row>
        <Col xs={12} md={4}>
          <div className="chat-user-box me-0">
            {isFetching && !userId
              ? null
              : data
              ? data
                  .filter((item) => item.id !== userId)
                  .map((u: IUser) => {
                    return (
                      <div key={u.id}>
                        <UserMessage
                          chat={null}
                          avatar={null}
                          name={u.first_name + " " + u.last_name}
                          onChooseUser={() => {
                            setReceiver(u);
                            setMessage("");
                            setMess([]);
                            setOffset(0);
                            setScrollHeight(0);
                          }}
                        />
                      </div>
                    );
                  })
              : null}
          </div>
        </Col>

        {receiver ? (
          <Col xs={12} md={8}>
            <div className="chat-wrapper ms-0">
              <div className="chat-socket d-flex flex-column justify-content-between">
                <TopMessageBox receiver={receiver} />
                <div
                  className="box-chat_message pt-2 d-flex flex-column justify-content-start"
                  onScroll={handleScroll}
                  ref={chatContainerRef}
                >
                  {dataMessage &&
                  dataMessage.data.length > 0 &&
                  fetchingMessage ? (
                    <Loading />
                  ) : (
                    <></>
                  )}
                  {renderMess()}
                </div>
                <MessageBox
                  value={message}
                  onChangeMessage={(value: string) => {
                    setMessage(value);
                  }}
                  onSubmitMessage={(value: string) => {
                    sendMessage();
                    setMessage("");
                    setMess([
                      ...mess,
                      {
                        receiver_id: receiver ? receiver?.id : null,
                        message: value,
                        sender_id: userId,
                      },
                    ]);
                  }}
                />
              </div>
            </div>
          </Col>
        ) : null}
      </Row>
    </>
  );
}
