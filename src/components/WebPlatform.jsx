"use client"

import { Container, Row, Col, Card } from "react-bootstrap"
import { BarChart2, Bell, Users, Gift } from "lucide-react"

const WebPlatform = () => {
  return (
    <Container className="py-5 my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Fredoka",
              color: "#92bee4",
            }}
          >
            Carlinker Web Platform – Dành cho gara & showroom
          </h2>
          <p style={{ color: "#555", fontFamily: "Poppins", lineHeight: "1.8" }}>
            Carlinker Web giúp gara quản lý đơn hàng, khách hàng và doanh thu dễ dàng, minh bạch – đồng thời nhận đơn từ
            người dùng app theo thời gian thực.
          </p>

          <ul style={{ color: "#333", fontFamily: "Poppins", lineHeight: "1.8" }}>
            <li>Quản lý đơn hàng, lịch hẹn và khách hàng trực tuyến.</li>
            <li>Theo dõi doanh thu, hiệu suất nhân viên.</li>
            <li>Nhận thông báo real-time khi có đơn mới.</li>
            <li>Quản lý đánh giá, phản hồi và chương trình khuyến mãi.</li>
          </ul>
        </Col>

        <Col md={6} className="d-flex flex-wrap gap-3 justify-content-center mt-4 mt-md-0">
          <Card className="p-4 text-center" style={{ width: "240px", borderRadius: "16px" }}>
            <BarChart2 color="#5B7FFF" size={36} />
            <h6 className="mt-3 fw-bold">Phân tích doanh thu</h6>
            <p className="text-muted small mb-0">Theo dõi hiệu suất và tăng trưởng gara.</p>
          </Card>

          <Card className="p-4 text-center" style={{ width: "240px", borderRadius: "16px" }}>
            <Bell color="#5B7FFF" size={36} />
            <h6 className="mt-3 fw-bold">Thông báo thời gian thực</h6>
            <p className="text-muted small mb-0">Cập nhật đơn hàng mới tức thì.</p>
          </Card>

          <Card className="p-4 text-center" style={{ width: "240px", borderRadius: "16px" }}>
            <Users color="#5B7FFF" size={36} />
            <h6 className="mt-3 fw-bold">Quản lý khách hàng</h6>
            <p className="text-muted small mb-0">Xây dựng dữ liệu khách hàng bền vững.</p>
          </Card>

          <Card className="p-4 text-center" style={{ width: "240px", borderRadius: "16px" }}>
            <Gift color="#5B7FFF" size={36} />
            <h6 className="mt-3 fw-bold">Khuyến mãi & chăm sóc</h6>
            <p className="text-muted small mb-0">Tạo chiến dịch marketing nội bộ linh hoạt.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default WebPlatform
