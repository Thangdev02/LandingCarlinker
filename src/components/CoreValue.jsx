"use client"

import { Container, Row, Col } from "react-bootstrap"
import { FaEye, FaRocket } from "react-icons/fa"


const CoreValues = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2
          style={{
            background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            fontSize: "56px",
            fontFamily: "Fredoka",
          }}
        >
          Tầm nhìn - Sứ mệnh - Giá trị
        </h2>
        <hr
          style={{
            width: "100px",
            borderTop: "3px solid #60A3D9",
            margin: "20px auto",
          }}
        />
      </div>

      <Row className="g-4">
        <Col md={6} lg={4} className="mb-4">
          <div
            style={{
              background: "linear-gradient(135deg, #60A3D9, #BFD7ED)",
              borderRadius: "16px",
              padding: "40px 24px",
              color: "white",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.3)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(91, 127, 255, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(91, 127, 255, 0.3)"
            }}
          >
            <FaEye style={{ fontSize: "60px", marginBottom: "20px" }} />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                margin: "0 0 16px 0",
                fontFamily: "Fredoka",
              }}
            >
              Tầm nhìn
            </h4>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Trở thành hệ sinh thái kết nối ô tô hàng đầu Việt Nam, nơi mọi nhu cầu của người lái và mọi cơ hội của
              gara, showroom được kết nối chỉ bằng một chạm.
            </p>
          </div>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <div
            style={{
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              borderRadius: "16px",
              padding: "40px 24px",
              color: "white",
              boxShadow: "0 8px 32px rgba(157, 78, 221, 0.3)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(157, 78, 221, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(157, 78, 221, 0.3)"
            }}
          >
            <FaRocket style={{ fontSize: "60px", marginBottom: "20px" }} />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                margin: "0 0 16px 0",
                fontFamily: "Fredoka",
              }}
            >
              Sứ mệnh
            </h4>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                fontSize: "14px",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              <li style={{ marginBottom: "8px" }}>Giúp người lái an tâm trên mọi hành trình</li>
              <li style={{ marginBottom: "8px" }}>Thúc đẩy chuyển đổi số cho gara và showroom Việt</li>
              <li>Tạo dựng niềm tin, minh bạch và trải nghiệm vượt trội</li>
            </ul>
          </div>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <div
            style={{
              background: "linear-gradient(135deg, #60A3D9, #BFD7ED)",
              borderRadius: "16px",
              padding: "40px 24px",
              color: "white",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.3)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(91, 127, 255, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(91, 127, 255, 0.3)"
            }}
          >
            <FaRocket style={{ fontSize: "60px", marginBottom: "20px" }} />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                margin: "0 0 16px 0",
                fontFamily: "Fredoka",
              }}
            >
              Giá trị cốt lõi
            </h4>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                lineHeight: "1.8",
                margin: 0,
                fontWeight: "600",
              }}
            >
              Nhanh chóng • Chính xác • Minh bạch • Tin cậy • Phát triển bền vững
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CoreValues
