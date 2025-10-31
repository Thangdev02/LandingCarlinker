"use client"

import { Container, Row, Col } from "react-bootstrap"

const OriginStory = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">
        <Col
          md={6}
          className="mb-4 mb-md-0 d-flex justify-content-center"
          style={{ position: "relative" }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #BFD7ED, #60A3D9)",
              borderRadius: "20px",
              padding: "20px",
              border: "2px solid rgba(91, 127, 255, 0.2)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              width: "100%",
              maxWidth: "480px", 
              height:'400px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "16 / 9", 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(91, 127, 255, 0.2)"
              e.currentTarget.style.borderColor = "#5B7FFF"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.borderColor = "rgba(91, 127, 255, 0.2)"
            }}
          >
            <video
              src="./videogg.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        </Col>

        <Col md={6}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              fontFamily: "Fredoka",
              marginBottom: "24px",
              background: "linear-gradient(to right, #60A3D9, #BFD7ED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Câu chuyện khởi nguồn
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              fontFamily: "Poppins",
              marginBottom: "20px",
            }}
          >
            Trên mỗi hành trình, không ai muốn xe dừng lại giữa đường — nhưng khi điều đó xảy ra, việc tìm được gara uy
            tín hay đội cứu hộ tin cậy lại không hề dễ.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              fontFamily: "Poppins",
              marginBottom: "20px",
            }}
          >
            Trong khi đó, nhiều gara và showroom lại đang nỗ lực tìm cách tiếp cận khách hàng, quản lý dịch vụ và xây
            dựng thương hiệu trực tuyến hiệu quả hơn.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#333",
              fontFamily: "Poppins",
              fontWeight: "600",
              padding: "20px",
              background: "linear-gradient(135deg, #BFD7ED, #BFD7ED)",
              borderLeft: "4px solid #5B7FFF",
              borderRadius: "8px",
            }}
          >
            Từ thực tế ấy, CarLinker ra đời — như một "cầu nối thông minh" giữa người lái xe và các đơn vị dịch vụ ô tô,
            giúp mọi bên cùng kết nối, vận hành và phát triển trong kỷ nguyên số.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default OriginStory
