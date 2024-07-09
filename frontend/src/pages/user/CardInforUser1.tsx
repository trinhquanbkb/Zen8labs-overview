import React from "react";
import { Badge, Card } from "react-bootstrap";
import profilePic from "../../assets/images/users/avatar-1.jpg";

export interface ICardInforUser1 {
  name: string;
  avatar: string | undefined;
  nick_name: string | undefined;
  about: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address: string | undefined;
}

export default function CardInforUser1({
  name,
  avatar,
  nick_name,
  about,
  phone,
  email,
  address,
}: ICardInforUser1) {
  return (
    <Card className="card-user-infor">
      <Card.Body className="pb-0">
        <div className="text-center mt-2">
          <img
            src={avatar ? avatar : profilePic}
            alt=""
            className="avatar-xl rounded-circle"
          />
          <h4 className="mt-2 mb-0">{name}</h4>
          <h6 className="text-muted fw-normal mt-2 mb-3">
            {nick_name ? nick_name : "No nickname yet"}
          </h6>

          <div className="mt-3 pt-3 border-top text-start">
            <h5 className="mb-2">About</h5>
            <p className="text-muted mb-2">{about}</p>
          </div>

          <div className="mt-3 pt-3 border-top text-start">
            <h5 className="mb-2">Contact information</h5>
            <div className="table-responsive">
              <table className="table table-borderless mb-0 text-muted">
                <tbody>
                  <tr>
                    <th scope="row" className="text-secondary">
                      Email
                    </th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-secondary">
                      Phone
                    </th>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-secondary">
                      Address
                    </th>
                    <td>{address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr></hr>
          </div>

          <p className="mb-2">
            <Badge bg="" className="badge-soft-success me-1">
              UI & UX
            </Badge>
            <Badge bg="" className="badge-soft-success">
              Frontend Development
            </Badge>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
