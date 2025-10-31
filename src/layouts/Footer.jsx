"use client"
import { Container, Row, Col } from "react-bootstrap"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #60A3D9 0%, #60A3D9 100%)",
        color: "white",
        padding: "60px 0 20px",
        fontFamily: "Fredoka, sans-serif",
      }}
    >
      <Container>
        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
             
              <h5 className="mb-0 fw-bold">CarLinker</h5>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.6", opacity: 0.9 }}>
              Kết nối mọi hành trình, gắn liền mọi dịch vụ ô tô. Từ cứu hộ, bảo dưỡng, đến showroom – tất cả đều trong
              một nền tảng duy nhất.
            </p>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3" style={{ fontSize: "16px" }}>
              Dịch vụ
            </h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Bảo dưỡng xe
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Sửa chữa khẩn cấp
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Thay phụ tùng
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Cứu hộ 24/7
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3" style={{ fontSize: "16px" }}>
              Công ty
            </h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Về chúng tôi
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Tuyển dụng
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: "16px" }}>
              Liên hệ
            </h6>
            <div className="mb-3 d-flex gap-2 align-items-start">
              <FaPhone size={16} className="mt-1" style={{ flexShrink: 0 }} />
              <div>
               
                <p className="mb-0" style={{ fontSize: "14px" }}>
                097 475 03 57
                </p>
              </div>
            </div>
            <div className="mb-3 d-flex gap-2 align-items-start">
              <FaEnvelope size={16} className="mt-1" style={{ flexShrink: 0 }} />
              <p className="mb-0" style={{ fontSize: "14px" }}>
              carlinker2025@gmail.com
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <FaMapMarkerAlt size={16} className="mt-1" style={{ flexShrink: 0 }} />
              <p className="mb-0" style={{ fontSize: "14px" }}>
              Đại học FPT Hà Nội, Hanoi, Vietnam
              </p>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)", margin: "40px 0" }} />

        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p style={{ fontSize: "14px", margin: 0, opacity: 0.9 }}>© 2025 CarLinker. Tất cả quyền được bảo lưu.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-2 justify-content-center justify-content-md-end">
              {[
                { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61581153389106&mibextid=wwXIfr&rdid=Z5cBsO9OTadq7XZR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GCAmUhPQ6%2F%3Fmibextid%3DwwXIfr" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaInstagram, link: "#" },
                { Icon: FaLinkedinIn, link: "#" },
                { Icon: FaYoutube, link: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "white"
                    e.currentTarget.style.color = "#5B7FFF"
                    e.currentTarget.style.transform = "translateY(-3px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"
                    e.currentTarget.style.color = "white"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
