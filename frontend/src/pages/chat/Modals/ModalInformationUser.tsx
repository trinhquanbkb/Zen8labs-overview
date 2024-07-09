import React from "react";
import { useGetDetailUserQuery } from "../../../api/userApi";
import { Modal } from "react-bootstrap";
import CardInforUser1 from "../../user/CardInforUser1";
import Loading from "../../../components/Loading";
import logoImg from "../../../assets/images/logo_chat.png";

interface IProps {
  id: number;
  show: boolean;
  handleShow: any;
}

export default function ModalInformationUser({ id, show, handleShow }: IProps) {
  const { data: detailUser, isFetching: fetchingUser } = useGetDetailUserQuery({
    id: id,
  });

  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header onHide={() => handleShow(false)} closeButton>
          <Modal.Title as="h3">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {detailUser && !fetchingUser ? (
            <CardInforUser1
              name={detailUser.first_name + " " + detailUser.last_name}
              avatar={logoImg}
              nick_name={detailUser.nick_name}
              about={detailUser.about}
              phone={detailUser.phone}
              email={detailUser.email}
              address={detailUser.address}
            />
          ) : (
            <Loading />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
