import React, { useState, useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useCookies } from "react-cookie";
import { Col, Row } from "react-bootstrap";
import { useGetAllUsersQuery } from "../../api/userApi";
import { useGetMessageInConvertationQuery } from "../../api/messageApi";
import { IUser } from "../../interfaces/users";
import MessageBox from "./MessageBox";
import TopMessageBox from "./TopMessageBox";
import Loading from "../../components/Loading";
import UserHold from "./UserHold";
import Mess from "./Mess";
import UserMessage from "./UserMessage";

export interface IMess {
  message: string | null | undefined;
  receiver_id: number | null | undefined;
  sender_id: number | null | undefined;
  created_at: Date;
  updated_at: Date;
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
  const [statusSend, setStatusSend] = useState<boolean>(false);
  const [listUserOnline, setListUserOnline] = useState<number[]>([]);

  // fetch data
  const { data, isFetching } = useGetAllUsersQuery();
  const { data: dataMessage, isFetching: fetchingMessage } =
    useGetMessageInConvertationQuery({
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
        // setId(String(socketRef.current!.id));
      });
      socketRef.current.on("sendDataServer", (dataGot) => {
        setMess((oldMsgs) => [...oldMsgs, dataGot]);
      });
      socketRef.current.on("sendOnlineAccount", (userId) => {
        setListUserOnline([...userId]);
      });
      socketRef.current.on("sendOfflineAccount", (userId) => {
        setListUserOnline([...userId]);
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
      const convertations = data.find((d) => d.id === userId);
      convertations?.converstations_id.forEach((conver: number) => {
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
          created_at: m.created_at,
          updated_at: m.updated_at,
        };
      });

      setMess([...messConvert.reverse(), ...mess]);
    }
  }, [fetchingMessage, receiver]);

  useEffect(() => {
    if (chatContainerRef.current && mess.length > 0 && !statusSend) {
      const previousScrollHeight = chatContainerRef.current?.scrollHeight;
      setScrollHeight(previousScrollHeight);
      chatContainerRef.current.scrollTop =
        scrollHeight === 0
          ? previousScrollHeight
          : previousScrollHeight - scrollHeight;
      setStatusSend(false);
    }
  }, [mess, statusSend]);

  useEffect(() => {
    if (cookies.user_infor && socketRef.current) {
      setUserId(cookies.user_infor ? cookies.user_infor.id : null);
      socketRef.current.emit("userOnline", cookies.user_infor.id);
    }
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
      if (m.sender_id !== userId) {
        return <Mess sender={m} index={index} mess={mess} userId={userId} />;
      } else {
        return <Mess sender={m} index={index} mess={mess} userId={userId} />;
      }
    });
  };

  return (
    <>
      <Row>
        <Col xs={3} md={3}>
          <div className="chat-user-box me-0 px-3 pt-3">
            <UserHold
              name={
                cookies.user_infor
                  ? cookies.user_infor.first_name +
                    " " +
                    cookies.user_infor.last_name
                  : ""
              }
            />
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
                          online={listUserOnline.includes(u.id)}
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
          <Col xs={9} md={9}>
            <div className="chat-wrapper ms-0">
              <div className="chat-socket d-flex flex-column justify-content-between">
                <TopMessageBox
                  online={listUserOnline.includes(receiver.id)}
                  receiver={receiver}
                />
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
                        created_at: new Date(),
                        updated_at: new Date(),
                      },
                    ]);
                    setStatusSend(true);
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
