import React from "react";
import { Card } from "react-bootstrap";
import FormEditUser from "./FormEditUser";

export interface ICardInforUser2 {
  id: number;
  first_name: string | undefined;
  last_name: string | undefined;
  avatar: string | undefined;
  nick_name: string | undefined;
  about: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address: string | undefined;
  dob: Date | undefined;
}

export default function CardInforUser2(data: ICardInforUser2) {
  return (
    <Card className="card-user-infor">
      <Card.Body className="pb-0">
        <h3 className="mb-4">Edit Profile</h3>
        <FormEditUser data={data} />
      </Card.Body>
    </Card>
  );
}
