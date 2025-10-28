"use client"

import { Container, Row, Col, Button } from "react-bootstrap"

const PricingPlans = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2
          style={{
            background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
            fontSize: "56px",
            fontFamily: "Fredoka",
          }}
        >
          Gói dịch vụ & Bảng giá
        </h2>
        <div
          style={{
            width: "897px",
            height: "4px",
            background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
            margin: "10px auto",
            borderRadius: "2px",
          }}
        />
      </div>

      <Row className="text-center g-4"
       style={{display: "flex", justifyContent: "center"}}>
       

        <Col md={4} className="h-100 d-flex flex-column">
          <div
            style={{
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.3)",
              color: "#fff",
              fontFamily: "Poppins",
              transition: "all 0.3s ease",
            }}
            className="d-flex flex-column justify-content-between h-100"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(91, 127, 255, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(91, 127, 255, 0.3)"
            }}
          >
            <div>
              <h5
                style={{
                  fontWeight: "700",
                  fontSize: "32px",
                  fontFamily: "Fredoka",
                  marginBottom: "8px",
                }}
              >
                CARLINKER PREMIUM
              </h5>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "6%",
                }}
              >
                Trải nghiệm <b>tuyệt vời</b> hơn
              </p>
              <ul
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  listStyleType: "none",
                  padding: 0,
                  lineHeight: "2",
                }}
              >
                <li>✔ Ưu tiên đặt lịch</li>
                <li>✔ Hỗ trợ 24/7</li>
                <li>✔ Miễn Phí 15 ngày</li>
                <li>✔ Ưu đãi độc quyền</li>
                <li>✔ Bảo hành</li>
              </ul>
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                Chỉ từ <strong>249.000đ/tháng</strong>
              </p>
            </div>
            <div className="text-center mt-3">
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#5B7FFF",
                  border: "none",
                  fontWeight: "700",
                  width: "241px",
                  height: "58px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  fontFamily: "Fredoka",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                Đăng kí ngay
              </Button>
            </div>
          </div>
        </Col>

        {/* Business Plan */}
                {/* Premium Plan */}

      </Row>
    </Container>
  )
}

export default PricingPlans
