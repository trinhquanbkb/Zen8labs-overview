import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

// images
import notFound from "../../assets/images/not-found.png";

const Error404 = () => {
	return (
		<div className="account-pages mt-5 mb-5">
			<Container>
				<Row className="justify-content-center">
					<Col xl={4} lg={5} xs={8}>
						<div className="text-center">
							<div>
								<img
									src={notFound}
									alt=""
									className="img-fluid"
								/>
							</div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<h3 className="mt-3">
							Không tìm thấy trang bạn đang tìm kiếm
						</h3>
						<p className="text-muted mb-4">
							Bạn có lẽ cần quay trở lại trang chủ?
						</p>
						<Link to="/" className="btn btn-lg btn-primary">
							Đưa tôi về trang chủ
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Error404;
