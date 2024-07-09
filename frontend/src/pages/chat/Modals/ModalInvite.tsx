// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useGetAllUsersQuery } from "../../../api/userApi";
import {
  useGetDetailGroupQuery,
  useUpdateGroupMutation,
} from "../../../api/groupApi";
import { toast } from "react-toastify";

interface IProps {
  show: boolean;
  handleShow: any;
  groupId: number;
}

interface Option {
  id: number;
  label: string;
  value: number;
}

export default function ModalInvite({ show, handleShow, groupId }: IProps) {
  const [multiSelections, setMultiSelections] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>();

  const { data: dataSearchUser } = useGetAllUsersQuery();
  const { data: dataGroup } = useGetDetailGroupQuery({ id: groupId });
  const [updateGroupApi] = useUpdateGroupMutation();

  useEffect(() => {
    if (dataSearchUser && dataGroup) {
      const userInGroup = dataGroup.users.map((item) => item.id);
      const listOption: Option[] = dataSearchUser
        .filter((item) => !userInGroup.includes(item.id))
        .map((item) => {
          return { id: item.id, value: item.id, label: item.full_name };
        });
      setOptions([...listOption]);
    }
  }, [dataSearchUser, dataGroup]);

  const onChangeMultipleSelection = (selected: Option[]) => {
    setMultiSelections(selected);
  };

  const onSubmit = async () => {
    const result = await updateGroupApi({
      id: groupId,
      userId: [
        ...dataGroup.users.map((item) => item.id),
        multiSelections.map((item) => item.id),
      ],
    });
    if (result.error) {
      toast.error("Invite user to group error!");
    } else {
      toast.success("Invite user to group success!");
      setMultiSelections([]);
      handleShow(false);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header onHide={() => handleShow(false)} closeButton>
          <Modal.Title as="h3">Invite users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Choose user</Form.Label>
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
