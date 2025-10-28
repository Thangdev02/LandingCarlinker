"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    alert("Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.")
    setFormData({ name: "", phone: "", email: "", date: "", time: "", service: "" })
  }

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2
            style={{
              fontWeight: "600",
              fontSize: "56px",
              fontFamily: "Fredoka",
              marginBottom: "20px",
            }}
          >
            Đặt lịch
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #5B7FFF, #9D4EDD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "64px",
              }}
            >
              sửa chữa
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "20px",
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Chọn dịch vụ, ngày giờ phù hợp và để chúng tôi lo phần còn lại. Đội thợ chuyên nghiệp sẽ chăm sóc chiếc xe
            của bạn.
          </p>
        </Col>

        <Col md={6}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(91, 127, 255, 0.05), rgba(157, 78, 221, 0.05))",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(91, 127, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(91, 127, 255, 0.1)",
            }}
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Tên của bạn</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập tên"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #5B7FFF",
                    padding: "10px 12px",
                    fontFamily: "Poppins",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Số điện thoại</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #5B7FFF",
                    padding: "10px 12px",
                    fontFamily: "Poppins",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #5B7FFF",
                    padding: "10px 12px",
                    fontFamily: "Poppins",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Dịch vụ</Form.Label>
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #5B7FFF",
                    padding: "10px 12px",
                    fontFamily: "Poppins",
                  }}
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="maintenance">Bảo dưỡng định kỳ</option>
                  <option value="repair">Sửa chữa khẩn cấp</option>
                  <option value="parts">Thay pin & phụ tùng</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Ngày</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #5B7FFF",
                        padding: "10px 12px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontFamily: "Poppins", fontWeight: "600" }}>Giờ</Form.Label>
                    <Form.Control
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #5B7FFF",
                        padding: "10px 12px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                type="submit"
                style={{
                  background: "linear-gradient(90deg, #5B7FFF, #9D4EDD)",
                  border: "none",
                  borderRadius: "8px",
                  width: "100%",
                  padding: "12px",
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
                Đặt lịch ngay
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BookingForm
