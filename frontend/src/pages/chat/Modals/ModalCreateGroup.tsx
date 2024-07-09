// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useGetAllUsersQuery } from "../../../api/userApi";
import { useCreateGroupMutation } from "../../../api/groupApi";
import { toast } from "react-toastify";

interface IModalCreateGroup {
  show: boolean;
  handleShow: any;
}

interface Option {
  id: number | string;
  label: string;
  value: string | number;
}

export default function ModalCreateGroup({
  show,
  handleShow,
}: IModalCreateGroup) {
  const [multiSelections, setMultiSelections] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>();
  const [nameGroup, setNameGroup] = useState("");

  const { data: dataSearchUser } = useGetAllUsersQuery();
  const [createGroupApi] = useCreateGroupMutation();

  useEffect(() => {
    if (dataSearchUser) {
      const listOption = dataSearchUser.map((item) => {
        return { id: item.id, value: item.id, label: item.full_name };
      });
      setOptions(listOption);
    }
  }, [dataSearchUser]);

  const onChangeMultipleSelection = (selected: Option[]) => {
    setMultiSelections(selected);
  };

  const onSubmit = async () => {
    if (multiSelections.length <= 2) {
      toast.warning("Cannot create group with quantity users < 2!");
    } else if (nameGroup === "") {
      toast.warning("Need fill name group"!);
    } else {
      const result = await createGroupApi({
        avatar: null,
        name: nameGroup,
        users: multiSelections.map((item) => item.id),
      });
      if (!result) {
        toast.error("Error server: Cannot create new group!");
      } else {
        toast.success("Create new group success!");
        setMultiSelections([]);
        setNameGroup("");
        handleShow(false);
      }
    }
  };

  return (
    <div>
      <Modal size="lg" show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header onHide={() => handleShow(false)} closeButton>
          <Modal.Title as="h3">New group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="name">Name group</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            value={nameGroup}
            onChange={(e) => setNameGroup(e.target.value)}
          />
          <Form.Label className="mt-3">Choose user</Form.Label>
          <Typeahead
            id="select3"
            multiple
            onChange={onChangeMultipleSelection}
            options={options}
            placeholder="Choose user..."
            selected={multiSelections}
          />
          <Button variant="danger" className="mt-3" onClick={() => onSubmit()}>
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
