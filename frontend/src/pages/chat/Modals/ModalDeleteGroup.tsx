import React from "react";
import { Modal } from "react-bootstrap";

interface IProps {
  groupId: number;
  show: boolean;
  handleShow: any;
}

export default function ModalDeleteGroup({
  groupId,
  show,
  handleShow,
}: IProps) {
  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header
          className="ps-3 pb-1"
          onHide={() => handleShow(false)}
          closeButton
        >
          <Modal.Title as="h3"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="ps-4"></Modal.Body>
      </Modal>
    </div>
  );
}
