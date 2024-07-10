import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  useGetDetailGroupQuery,
  useUpdateGroupMutation,
} from "../../../api/groupApi";
import { toast } from "react-toastify";
import { IUserInGroup } from "../../../interfaces/group";
import { useCookies } from "react-cookie";

interface IProps {
  groupId: number;
  show: boolean;
  handleShow: any;
  handleOutGroup: any;
}

export default function ModalDeleteGroup({
  groupId,
  show,
  handleShow,
  handleOutGroup,
}: IProps) {
  const [listUserId, setListUserId] = useState<number[]>([]);
  const [cookies] = useCookies();

  const { data: dataGroup } = useGetDetailGroupQuery({ id: groupId });
  const [updateGroupApi] = useUpdateGroupMutation();

  useEffect(() => {
    if (dataGroup && cookies.user_infor) {
      const userInGroup = dataGroup.users.map((item: IUserInGroup) => item.id);
      const listUserUpdate = userInGroup.filter(
        (item: number) => item !== cookies.user_infor.id
      );
      setListUserId(listUserUpdate);
    }
  }, [dataGroup, cookies]);

  const onSubmit = async () => {
    const result = await updateGroupApi({ id: groupId, userId: listUserId });
    if (result.data) {
      toast.success("Out group success!");
      handleOutGroup();
      handleShow(false);
    } else {
      toast.error("Out group error!");
    }
  };

  return (
    <div>
      <Modal show={show} onHide={() => handleShow(false)} centered>
        <Modal.Header
          className="ps-3 pb-1"
          onHide={() => handleShow(false)}
          closeButton
        ></Modal.Header>
        <Modal.Body className="ps-4">
          <h4 className="text-center">Confirm delete this group?</h4>
          <div className="d-flex justify-content-center mt-3 px-5">
            <div className="w-50 d-flex justify-content-around">
              <Button onClick={() => handleShow(false)} variant="warning">
                No
              </Button>
              <Button onClick={() => onSubmit()}>Yes</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
