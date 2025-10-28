"use client"

import { Container } from "react-bootstrap"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    content: '"CarLinker giúp tôi tiết kiệm thời gian đặt lịch sửa chữa. Dịch vụ chuyên nghiệp và giá cạnh tranh!"',
    author: "— Nguyễn Văn A",
    rating: 5,
  },
  {
    content: '"Thợ sửa chữa rất tận tâm, xe của tôi chạy như xe mới. Sẽ tiếp tục sử dụng CarLinker!"',
    author: "— Trần Thị B",
    rating: 5,
  },
  {
    content: '"Ứng dụng rất dễ sử dụng, có thể theo dõi tiến độ sửa chữa theo thời gian thực."',
    author: "— Lê Văn C",
    rating: 5,
  },
  {
    content: '"Đội hỗ trợ khách hàng rất tuyệt vời, luôn sẵn sàng giúp đỡ khi tôi có câu hỏi."',
    author: "— Phạm Thị D",
    rating: 5,
  },
  {
    content: '"Giá dịch vụ hợp lý, chất lượng cao. Tôi đã giới thiệu CarLinker cho bạn bè của tôi."',
    author: "— Hoàng Văn E",
    rating: 5,
  },
]

const TestimonialScroll = () => {
  return (
    <Container className="mt-5">
      <h2
        className="text-center fw-bold"
        style={{
          fontSize: "56px",
          fontFamily: "Fredoka",
          background: "linear-gradient(to right, #BFD7ED, #60A3D9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Khách hàng <span style={{ color: "#BFD7ED" }}>Cảm nhận</span>
      </h2>
      <hr
        style={{
          width: "80px",
          borderTop: "3px solid #5B7FFF",
          margin: "16px auto 32px",
        }}
      />

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          gap: "16px",
          paddingBottom: "8px",
        }}
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 0 calc(33.3333% - 10.66px)",
              background: "linear-gradient(135deg, #BFD7ED, #BFD7ED)",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(91, 127, 255, 0.1)",
              padding: "20px",
              scrollSnapAlign: "start",
              border: "1px solid #BFD7ED",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)"
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(91, 127, 255, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(91, 127, 255, 0.1)"
            }}
          >
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} style={{ color: "#FFD700", fontSize: "16px" }} />
              ))}
            </div>
            <p style={{ fontSize: "16px", fontStyle: "italic", fontFamily: "Poppins" }}>{item.content}</p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "16px",
                fontFamily: "Poppins",
                color: "#5B7FFF",
              }}
            >
              {item.author}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default TestimonialScroll
