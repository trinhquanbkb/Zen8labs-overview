import React from "react";
import { Modal } from "react-bootstrap";
import { useGetDetailGroupQuery } from "../../../api/groupApi";
import Loading from "../../../components/Loading";
import logoImg from "../../../assets/images/logo_chat.png";

interface IProps {
  groupId: number;
  show: boolean;
  handleShow: any;
}

export default function ModalViewUser({ groupId, show, handleShow }: IProps) {
  const { data: dataGroup } = useGetDetailGroupQuery({ id: groupId });

  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header
          className="ps-3 pb-1"
          onHide={() => handleShow(false)}
          closeButton
        >
          <Modal.Title as="h3">List users</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ps-4">
          {dataGroup ? (
            dataGroup.users.map((item) => {
              return (
                <div className="d-flex justify-content-start mb-2">
                  <img
                    src={logoImg}
                    alt="logo"
                    className="rounded-circle avatar-sm"
                  />
                  <div className="ms-2" style={{ lineHeight: "32px" }}>
                    <span className="fw-bold">
                      {item.first_name + " " + item.last_name}
                    </span>
                    {" ("}
                    <span>{item.nick_name}</span>
                    {")"}
                  </div>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
