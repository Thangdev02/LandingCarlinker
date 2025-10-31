"use client"

import { Container, Row, Col } from "react-bootstrap"
import { FaWrench, FaOilCan, FaBatteryFull } from "react-icons/fa"

const services = [
  {
    title: "Bảo dưỡng định kỳ",
    icon: FaOilCan,
    description:
      "Dễ dàng đặt lịch bảo dưỡng tại các garage uy tín gần bạn. Carlinker giúp theo dõi tình trạng xe, nhắc lịch thay dầu, kiểm tra hệ thống và đảm bảo hiệu suất vận hành ổn định.",
    color: "#5B7FFF",
    image: "/images/bao-duong.jpg",
  },
  {
    title: "Sửa chữa khẩn cấp",
    icon: FaWrench,
    description:
      "Đội thợ sửa chữa chuyên nghiệp sẵn sàng giải quyết các vấn đề khẩn cấp 24/7. Nhanh chóng, hiệu quả và đáng tin cậy.",
    color: "#9D4EDD",
    image: "/images/sua-chua.jpg",
  },
  {
    title: "Thay pin & phụ tùng",
    icon: FaBatteryFull,
    description:
      "Cung cấp pin, phụ tùng chính hãng với giá cạnh tranh. Lắp đặt chuyên nghiệp bởi các kỹ thuật viên có kinh nghiệm.",
    color: "#5B7FFF",
    image: "/images/thay-pin.jpg",
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
        Dịch vụ nổi bật 
      </h2>
      <hr
        style={{
          width: "80px",
          borderTop: "3px solid #5B7FFF",
          margin: "0 auto 40px",
        }}
      />

      {services.map((service, index) => {
        const IconComponent = service.icon
        const isEven = index % 2 === 0
        
        return (
          <Row 
            key={index} 
            className={`mb-5 align-items-center ${isEven ? '' : 'flex-row-reverse'}`}
          >
            <Col md={6}>
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
            <Col md={6}>
              <div
                style={{
                  height: "300px",
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
              
                  {!service.image && (
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`,
                        padding: "20px",
                        borderRadius: "8px",
                      }}
                    >
                      Hình ảnh {service.title}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

export default ServiceHighlight