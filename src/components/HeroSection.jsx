"use client"

import { Container, Row, Col, Button } from "react-bootstrap"
import { motion } from "framer-motion"

const HeroSection = () => {
  const images = [
    "https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580532.jpg?semt=ais_hybrid&w=740&q=80",
    "https://www.shutterstock.com/image-photo/mechanic-using-wrench-while-working-600nw-2184125681.jpg",
    "https://www.autotrainingcentre.com/wp-content/uploads/2020/07/automotive-school-2.jpg",
    "https://marvel-b1-cdn.bc0a.com/f00000000270514/s25180.pcdn.co/wp-content/uploads/2016/01/iStock-61253300.jpg ",
    "https://cgsmotors.com/wp-content/uploads/2023/09/car-engine-repair.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/356136752/MI/AK/JX/4725562/car-engine-repair-services.jpg",
    "https://media.istockphoto.com/id/1497239622/photo/customer-and-automotive-technician-talking-about-the-car-problem-in-a-workshop.jpg?s=612x612&w=0&k=20&c=w-vftkUlyYFu0awn6ElDdc1BWocdPgyyw3Qc9BBD1-w=",
  ]

  return (
    <Container fluid className="text-center py-5">
      {/* --- Title Section --- */}
      <Row className="justify-content-center align-items-center">
        <Col lg={10}>
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "64px",
              fontFamily: "Poppins",
              color: "#0B031A",
              lineHeight: "1.2",
            }}
          >
            CarLinker – <br />
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
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Từ cứu hộ, bảo dưỡng, đến showroom – tất cả đều trong một nền tảng duy nhất.
          </p>

          {/* --- Buttons --- */}
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
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
                e.currentTarget.style.backgroundColor = "#60A3D9"
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = "#60A3D9"
              }}
              onClick={() => {
                window.location.href = "https://carlinker-bf127.web.app/auth/login"
              }}
            >
              Đăng ký đối tác Gara/Showroom
            </Button>
          </div>
        </Col>
      </Row>

      {/* --- Image Section --- */}
      <Row className="justify-content-center mt-5">
        <Col lg={12}>
          <div
            className="d-flex justify-content-center flex-wrap gap-3"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{
                  width: "150px",
                  height: "230px",
                  borderRadius: "16px",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection
