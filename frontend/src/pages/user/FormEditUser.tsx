import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ICardInforUser2 } from "./CardInforUser2";

export default function FormEditUser(data: { data: ICardInforUser2 }) {
  return (
    <div>
      <Form className="form-horizontal">
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="first_name">First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                id="first_name"
                value={data.data.first_name}
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="last_name">Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                id="last_name"
                value={data.data.last_name}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nick_name">Nickname</Form.Label>
              <Form.Control
                type="text"
                name="nick_name"
                id="nick_name"
                value={data.data.nick_name}
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={data.data.email}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                id="phone"
                value={data.data.phone}
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                value={data.data.address}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="example-date">Date</Form.Label>
              <Form.Control id="example-date" type="date" name="date" />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="example-fileinput">Avatar</Form.Label>
              <Form.Control type="file" id="example-fileinput" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="textarea">About</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            id="textarea"
            value={data.data.about}
            name="about"
          />
        </Form.Group>

        <div className="d-flex justify-content-center mb-3">
          <Button variant="warning">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
