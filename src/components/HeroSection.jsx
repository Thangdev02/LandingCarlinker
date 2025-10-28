"use client"

import { Row, Col, Button } from "react-bootstrap"
import { FaCar, FaTools } from "react-icons/fa"
import { RiMotorbikeFill } from "react-icons/ri"

const HeroSection = () => {
   
  return (
    <Row className="align-items-center">
      <Col md={6} className="reveal-left">
        <h1 className="fw-bold mb-3" style={{ fontSize: "64px", fontFamily: "Poppins" }}>
          CarLinker –
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #60A3D9, #60A3D9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "44px",
              fontFamily: "Fredoka",
            }}
          >
            Kết nối mọi hành trình, gắn liền mọi dịch vụ ô tô.
          </span>
        </h1>
        <p
          className="text-muted"
          style={{ fontFamily: "Poppins", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}
        >
          Từ cứu hộ, bảo dưỡng, đến showroom – tất cả đều trong một nền tảng duy nhất
        </p>

        <div className="d-flex gap-3 mt-4 flex-wrap">
          <Button
            style={{
              background: "linear-gradient(90deg, #60A3D9, #60A3D9)",
              border: "none",
              borderRadius: "12px",
              padding: "14px 36px",
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "Poppins",
              boxShadow: "0 4px 15px rgba(91, 127, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(91, 127, 255, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(91, 127, 255, 0.3)"
            }}
          >
            Trải nghiệm ngay
          </Button>
          <Button
            variant="outline-primary"
            style={{
              borderColor: "#60A3D9",
              color: "#60A3D9",
              borderRadius: "12px",
              padding: "14px 36px",
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "Poppins",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5B7FFF"
              e.currentTarget.style.color = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#5B7FFF"
            }}
            onClick={() => {
                window.location.href = "https://carlinker-bf127.web.app/auth/login"
                }}
          >
            Đăng ký đối tác Gara/Showroom
          </Button>
        </div>
      </Col>

      <Col md={6} className="text-center reveal-right">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "360px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.3)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <FaCar style={{ fontSize: "80px", color: "white" }} />
          </div>
          <div
            style={{
              width: "140px",
              height: "360px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(157, 78, 221, 0.3)",
              marginTop: "40px",
              animation: "float 3s ease-in-out infinite 0.5s",
            }}
          >
            <FaTools style={{ fontSize: "80px", color: "white" }} />
          </div>
          <div
            style={{
                width: "140px",
              height: "360px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.3)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <RiMotorbikeFill style={{ fontSize: "80px", color: "white" }} />

          </div>
        </div>
      </Col>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Row>
  )
}

export default HeroSection
