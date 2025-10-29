"use client"

import { Container, Row, Col, Card } from "react-bootstrap"
import { Smartphone, MapPin, Clock, Star } from "lucide-react"

const ProductOverview = () => {
  return (
    <Container className="py-5 my-5">
      <h2
        className="text-center mb-5"
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          fontFamily: "Fredoka",
          background: "linear-gradient(to right, #92bee4, #92bee4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Carlinker – Nền tảng kép thông minh
      </h2>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/product.png"
            alt="Carlinker Mobile App"
            style={{
              width: "70%",
              height: "90vh",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(91,127,255,0.25)",
            }}
          />
        </Col>

        <Col md={6}>
          <h3 style={{ fontWeight: "bold", color: "#9fc6e6" }}>Tổng quan</h3>
          <p style={{ lineHeight: "1.8", color: "#555", fontFamily: "Poppins" }}>
            Carlinker là nền tảng công nghệ kép gồm:
            <br />– <b>Carlinker Mobile App</b> dành cho người dùng ô tô (khách hàng cá nhân).
            <br />– <b>Carlinker Web Platform</b> dành cho gara, showroom và nhà quản lý hệ thống.
            <br />
            Hai nền tảng hoạt động song song, được kết nối bằng dữ liệu thời gian thực – tạo nên một hệ sinh thái dịch vụ
            ô tô thông minh.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Card className="p-3 flex-fill" style={{ minWidth: "200px", borderRadius: "16px" }}>
              <Smartphone color="#5B7FFF" size={32} />
              <h6 className="mt-2 fw-bold">Đặt lịch dịch vụ</h6>
              <p className="text-muted small mb-0">Sửa chữa, bảo dưỡng, cứu hộ nhanh chóng.</p>
            </Card>

            <Card className="p-3 flex-fill" style={{ minWidth: "200px", borderRadius: "16px" }}>
              <MapPin color="#5B7FFF" size={32} />
              <h6 className="mt-2 fw-bold">Định vị GPS</h6>
              <p className="text-muted small mb-0">Tìm gara gần nhất và so sánh giá dịch vụ.</p>
            </Card>

            <Card className="p-3 flex-fill" style={{ minWidth: "200px", borderRadius: "16px" }}>
              <Clock color="#5B7FFF" size={32} />
              <h6 className="mt-2 fw-bold">Theo dõi tiến độ</h6>
              <p className="text-muted small mb-0">Cập nhật trạng thái đơn hàng theo thời gian thực.</p>
            </Card>

            <Card className="p-3 flex-fill" style={{ minWidth: "200px", borderRadius: "16px" }}>
              <Star color="#5B7FFF" size={32} />
              <h6 className="mt-2 fw-bold">Đánh giá gara</h6>
              <p className="text-muted small mb-0">Dựa trên phản hồi và điểm uy tín thực tế.</p>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductOverview
