import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useGetDetailUserQuery } from "../../api/userApi";
import CardInforUser1 from "./CardInforUser1";
import Loading from "../../components/Loading";
import CardInforUser2 from "./CardInforUser2";

export default function Information() {
  const [cookies] = useCookies();
  const [userId, setUserId] = useState<number | null>(null);
  const { data, isFetching } = useGetDetailUserQuery({ id: userId });

  useEffect(() => {
    if (cookies.user_infor) {
      setUserId(cookies.user_infor.id);
    }
  }, [cookies]);

  return (
    <div>
      {data && !isFetching ? (
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <CardInforUser1
              name={data.first_name + " " + data.last_name}
              avatar={data.avatar}
              about={data.about}
              nick_name={data.nick_name}
              phone={data.phone}
              email={data.email}
              address={data.address}
            />
          </Col>
          <Col xs={12} md={8}>
            <CardInforUser2
              first_name={data.first_name}
              last_name={data.last_name}
              avatar={data.avatar}
              nick_name={data.nick_name}
              about={data.about}
              phone={data.phone}
              email={data.email}
              address={data.address}
              dob={data.dob}
            />
          </Col>{" "}
        </Row>
      ) : (
        <Loading />
      )}
    </div>
  );
}
