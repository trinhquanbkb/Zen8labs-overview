import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import logoImg from "../../assets/images/logo_chat.png";
import groupImg from "../../assets/images/group-icon.png";
import classNames from "classnames";
import { IUser } from "../../interfaces/users";
import { useSearchUsersQuery } from "../../api/userApi";
import { useSearchGroupsQuery } from "../../api/groupApi";
import { IGroup } from "../../interfaces/group";
import ModalCreateGroup from "./Modals/ModalCreateGroup";

interface IUserMess {
  avatar?: string | null;
  name: string;
  chat?: string | null;
  onChooseUser: any;
  online: boolean;
}

interface IUserMessage {
  userId: number | undefined | null;
  onChooseUser: any;
  listUserOnline: any;
  keyword: string;
  handleCreateGroup: any;
}

const UserMess = ({ avatar, name, chat, onChooseUser, online }: IUserMess) => {
  return (
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
  );
};

export default function UserMessage({
  userId,
  onChooseUser,
  listUserOnline,
  keyword,
  handleCreateGroup,
}: IUserMessage) {
  const [form, setForm] = useState(false);
  const [showModalGroup, setShowModalGroup] = useState<boolean>(false);

  const { data: dataSearchUser, isFetching: fetchingSearchUser } =
    useSearchUsersQuery({ keyword: keyword });
  const { data: dataSearchGroup, isFetching: fetchingSearchGroup } =
    useSearchGroupsQuery({ keyword: keyword });

  return (
    <>
      <div className="d-flex justify-content-between">
        <ButtonGroup>
          <Button
            variant="white"
            className="mb-2 mb-sm-0"
            onClick={() => setForm(false)}
          >
            Users
          </Button>
          <Button
            variant="white"
            className="mb-2 mb-sm-0"
            onClick={() => setForm(true)}
          >
            Groups
          </Button>
        </ButtonGroup>

        <Button
          className="p-1"
          onClick={() => {
            setShowModalGroup(true);
          }}
        >
          <FeatherIcon icon={"plus"} className="icon-xs me-1" />
          Group
        </Button>
      </div>

      <div className="list-user-search mt-2">
        {!form
          ? fetchingSearchUser && !userId
            ? null
            : dataSearchUser
            ? dataSearchUser
                .filter((item) => item.id !== userId)
                .map((u: IUser) => {
                  return (
                    <div key={u.id}>
                      <UserMess
                        chat={null}
                        avatar={logoImg}
                        name={u.first_name + " " + u.last_name}
                        online={listUserOnline.includes(u.id)}
                        onChooseUser={() => {
                          onChooseUser({
                            id: u.id,
                            name: u.first_name + " " + u.last_name,
                            avatar: u.avatar ? u.avatar : logoImg,
                            isGroup: false,
                            groupId: null,
                          });
                        }}
                      />
                    </div>
                  );
                })
            : null
          : fetchingSearchGroup
          ? null
          : dataSearchGroup
          ? dataSearchGroup.map((u: IGroup) => {
              return (
                <div key={u.id}>
                  <UserMess
                    chat={null}
                    avatar={groupImg}
                    name={u.name}
                    online={true}
                    onChooseUser={() => {
                      onChooseUser({
                        id: u.id,
                        name: u.name,
                        avatar: u.avatar ? u.avatar : groupImg,
                        isGroup: true,
                        groupId: u.id,
                      });
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>

      <ModalCreateGroup
        show={showModalGroup}
        handleShow={(value: boolean) => setShowModalGroup(value)}
        handleCreateSuccess={(value: IGroup) => {
          handleCreateGroup(value);
        }}
      />
    </>
  );
}
