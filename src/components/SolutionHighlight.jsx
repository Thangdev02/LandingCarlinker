"use client"

import { Container, Row, Col } from "react-bootstrap"
import {
  FaUser,
  FaStore,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHistory,
  FaStar,
  FaChartLine,
  FaGift,
  FaUsers,
} from "react-icons/fa"

const SolutionHighlight = () => {
  const userFeatures = [
    { icon: FaMapMarkerAlt, text: "Tìm cứu hộ, gara, hoặc showroom gần nhất chỉ trong vài giây" },
    { icon: FaCalendarAlt, text: "Đặt lịch bảo dưỡng, sửa chữa, rửa xe hoặc kiểm tra xe dễ dàng" },
    { icon: FaHistory, text: "Theo dõi lịch sử dịch vụ, đánh giá chất lượng và nhận ưu đãi riêng" },
  ]

  const dealerFeatures = [
    { icon: FaChartLine, text: "Nhận và quản lý đơn hàng trực tuyến theo thời gian thực" },
    { icon: FaGift, text: "Thiết lập bảng giá, khuyến mãi và phản hồi khách hàng ngay trên nền tảng" },
    { icon: FaStar, text: "Xây dựng thương hiệu, tăng hiển thị và mở rộng tệp khách hàng tiềm năng" },
    { icon: FaUsers, text: "Quản lý nhân sự, doanh thu và lịch làm việc trên dashboard thông minh" },
  ]

  return (
    <Container className="my-5 py-5">
      <div className="text-center mb-5">
        <h2
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            marginBottom: "16px",
            background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Giải pháp CarLinker
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            fontFamily: "Poppins",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Nền tảng công nghệ toàn diện dành cho cả người dùng ô tô và các đơn vị kinh doanh dịch vụ
        </p>
      </div>

      <Row className="g-4 mt-4">
        <Col lg={6}>
          <div
            style={{
              background: "linear-gradient(135deg, #BFD7ED, #BFD7ED)",
              borderRadius: "16px",
              padding: "40px",
              border: "2px solid rgba(91, 127, 255, 0.2)",
              transition: "all 0.3s ease",
              height: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(91, 127, 255, 0.2)"
              e.currentTarget.style.borderColor = "#5B7FFF"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "rgba(91, 127, 255, 0.2)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <FaUser style={{ fontSize: "32px", color: "#60A3D9" }} />
              <h4 style={{ fontFamily: "Fredoka", fontWeight: "bold", fontSize: "24px", margin: 0 }}>
                Dành cho người dùng
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {userFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <IconComponent style={{ fontSize: "20px", color: "#60A3D9", marginTop: "4px", flexShrink: 0 }} />
                    <p style={{ fontSize: "15px", color: "#555", fontFamily: "Poppins", margin: 0, lineHeight: "1.6" }}>
                      {feature.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div
            style={{
              background: "linear-gradient(135deg, #BFD7ED, #BFD7ED)",
              borderRadius: "16px",
              padding: "40px",
              border: "2px solid rgba(157, 78, 221, 0.2)",
              transition: "all 0.3s ease",
              height: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(157, 78, 221, 0.2)"
              e.currentTarget.style.borderColor = "#9D4EDD"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "rgba(157, 78, 221, 0.2)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <FaStore style={{ fontSize: "32px", color: "#60A3D9" }} />
              <h4 style={{ fontFamily: "Fredoka", fontWeight: "bold", fontSize: "24px", margin: 0 }}>
                Dành cho Gara & Showroom
              </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {dealerFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <IconComponent style={{ fontSize: "20px", color: "#60A3D9", marginTop: "4px", flexShrink: 0 }} />
                    <p style={{ fontSize: "15px", color: "#555", fontFamily: "Poppins", margin: 0, lineHeight: "1.6" }}>
                      {feature.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </Col>
      </Row>

      <div
        style={{
          marginTop: "40px",
          padding: "24px",
          background: "linear-gradient(135deg, #60A3D9, #BFD7ED)",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        CarLinker giúp mọi bên trong hệ sinh thái ô tô hoạt động hiệu quả hơn, nhanh hơn và minh bạch hơn.
      </div>
    </Container>
  )
}

export default SolutionHighlight
