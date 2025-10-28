"use client"

import { Container, Row, Col } from "react-bootstrap"
import { FaWrench, FaOilCan, FaBatteryFull } from "react-icons/fa"

const services = [
  {
    title: "Bảo dưỡng định kỳ",
    icon: FaOilCan,
    description:
      "Dịch vụ bảo dưỡng toàn diện giúp xe của bạn luôn hoạt động tốt nhất. Thay dầu, kiểm tra hệ thống và bảo trì định kỳ.",
    color: "#5B7FFF",
  },
  {
    title: "Sửa chữa khẩn cấp",
    icon: FaWrench,
    description:
      "Đội thợ sửa chữa chuyên nghiệp sẵn sàng giải quyết các vấn đề khẩn cấp 24/7. Nhanh chóng, hiệu quả và đáng tin cậy.",
    color: "#9D4EDD",
  },
  {
    title: "Thay pin & phụ tùng",
    icon: FaBatteryFull,
    description:
      "Cung cấp pin, phụ tùng chính hãng với giá cạnh tranh. Lắp đặt chuyên nghiệp bởi các kỹ thuật viên có kinh nghiệm.",
    color: "#5B7FFF",
  },
]

const ServiceHighlight = () => {
  return (
    <Container className="mt-5">
      <h2
        className="text-center fw-bold mb-4"
        style={{
          fontSize: "56px",
          fontFamily: "Fredoka",
          background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Dịch vụ nổi bật ✨
      </h2>
      <hr
        style={{
          width: "80px",
          borderTop: "3px solid #5B7FFF",
          margin: "0 auto 40px",
        }}
      />

      <Row className="g-4">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Col md={4} key={index}>
              <div
                style={{
                  background: "linear-gradient(135deg, #BFD7ED, #BFD7ED)",
                  borderRadius: "16px",
                  padding: "30px",
                  border: "1px solid rgba(91, 127, 255, 0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(91, 127, 255, 0.2)"
                  e.currentTarget.style.borderColor = service.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "rgba(91, 127, 255, 0.2)"
                }}
              >
                <IconComponent
                  style={{
                    fontSize: "48px",
                    color: service.color,
                    marginBottom: "16px",
                  }}
                />
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    fontFamily: "Fredoka",
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  {service.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    fontFamily: "Poppins",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ServiceHighlight
