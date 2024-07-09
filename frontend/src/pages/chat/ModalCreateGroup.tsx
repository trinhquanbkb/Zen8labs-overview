// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useGetAllUsersQuery } from "../../api/userApi";

interface IModalCreateGroup {
  show: boolean;
  handleShow: any;
}

interface Option {
  id: number | string;
  label: string;
  value: string | string;
}

export default function ModalCreateGroup({
  show,
  handleShow,
}: IModalCreateGroup) {
  const [multiSelections, setMultiSelections] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>();

  const { data: dataSearchUser } = useGetAllUsersQuery();

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

  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header onHide={() => handleShow(false)} closeButton>
          <Modal.Title as="h5">New group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typeahead
            id="select3"
            multiple
            onChange={onChangeMultipleSelection}
            options={options}
            placeholder="Choose a state..."
            selected={multiSelections}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
