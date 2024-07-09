import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ICardInforUser2 } from "./CardInforUser2";
import { useUpdateUserMutation } from "../../api/userApi";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormEditUser(data: { data: ICardInforUser2 }) {
  const [updateUserApi] = useUpdateUserMutation();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      nick_name: "",
      email: "",
      phone: "",
      address: "",
      avatar: "",
      dob: "",
      about: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Trường bắt buộc!"),
      last_name: Yup.string().required("Trường bắt buộc!"),
      nick_name: Yup.string().nullable(),
      email: Yup.string().required("Trường bắt buộc!"),
      phone: Yup.string()
        .required("Trường bắt buộc!")
        .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
      address: Yup.string().nullable(),
      avatar: Yup.string().nullable(),
      dob: Yup.string().nullable(),
      about: Yup.string().nullable(),
    }),
    onSubmit: async (values: any) => {
      const result = await updateUserApi({ id: data.data.id, ...values });
      if (result.data) {
        toast.success("Update user success!");
      } else {
        toast.error("Update user error!");
      }
    },
  });

  useEffect(() => {
    if (data.data) {
      formik.setValues({
        ...formik.values,
        first_name: data?.data.first_name,
        last_name: data?.data.last_name,
        nick_name: data?.data.nick_name,
        phone: data?.data.phone,
        email: data?.data.email,
        avatar: data?.data.avatar,
        dob: data?.data.dob ? formatDate(data?.data.dob.toString()) : "",
        address: data?.data.address,
        about: data?.data.about,
      });
    }
  }, [data.data]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };
  console.log(formik.values);

  return (
    <div>
      <Form
        className="form-horizontal"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="first_name">First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                id="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
              {formik.errors.first_name && formik.touched.first_name && (
                <p className="error mb-0">
                  {formik.errors.first_name as string}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="last_name">Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                id="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
              {formik.errors.last_name && formik.touched.last_name && (
                <p className="error mb-0">
                  {formik.errors.last_name as string}
                </p>
              )}
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
                value={formik.values.nick_name}
                onChange={formik.handleChange}
              />
              {formik.errors.nick_name && formik.touched.nick_name && (
                <p className="error mb-0">
                  {formik.errors.nick_name as string}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                className="bg-gray"
                id="email"
                name="email"
                value={formik.values.email}
                readOnly
              />
              {formik.errors.email && formik.touched.email && (
                <p className="error mb-0">{formik.errors.email as string}</p>
              )}
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
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone && (
                <p className="error mb-0">{formik.errors.phone as string}</p>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && formik.touched.address && (
                <p className="error mb-0">{formik.errors.address as string}</p>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="example-date">Dob</Form.Label>
              <Form.Control
                id="example-date"
                type="date"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
              {formik.errors.dob && formik.touched.dob && (
                <p className="error mb-0">{formik.errors.dob as string}</p>
              )}
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
            value={formik.values.about}
            onChange={formik.handleChange}
            name="about"
          />
          {formik.errors.about && formik.touched.about && (
            <p className="error mb-0">{formik.errors.about as string}</p>
          )}
        </Form.Group>

        <div className="d-flex justify-content-center mb-3">
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
