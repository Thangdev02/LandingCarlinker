"use client"

import { useState } from "react"
import { Navbar, Nav, Button, Container } from "react-bootstrap"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Header.css"

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      expand="lg"
      className="navbar-carlinker shadow-sm sticky-top"
      style={{
        background: "linear-gradient(90deg, #BFD7ED 0%, #60A3D9 100%)",
        padding: "15px 0",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold fs-2 text-white d-flex align-items-center gap-2"
          style={{
            fontFamily: "Fredoka, sans-serif",
            backgroundColor: "transparent",
          }}

        >

          <img
            src="./logonew.png"
            alt="CarLinker Logo"
            style={{
              width: "100%",
              height: "58px",
              objectFit: "fill",
              marginRight: "8px",
            }}
          />
       
        </Navbar.Brand>


        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ border: "none", color: "white" }}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="ms-auto fw-semibold gap-3" style={{ fontFamily: "Fredoka, sans-serif", fontSize: "16px" }}>

            <Nav.Link
              href="#home"
              className="text-white nav-link-carlinker"
              style={{ transition: "all 0.3s ease" }}
            >
              Trang Chủ
            </Nav.Link>
            <Nav.Link href="#story" className="text-white nav-link-carlinker" style={{ transition: "all 0.3s ease" }}>
              Câu Chuyện
            </Nav.Link>
            <Nav.Link href="#solution" className="text-white nav-link-carlinker" style={{ transition: "all 0.3s ease" }}>
              Giải Pháp
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="text-white nav-link-carlinker"
              style={{ transition: "all 0.3s ease" }}
            >
              Dịch vụ
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-white nav-link-carlinker" style={{ transition: "all 0.3s ease" }}>
              Phản Hồi
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-2 ms-3 mt-3 mt-lg-0">
            <Button
              className="px-4 py-2 rounded-3 fw-semibold "
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "14px",
                background: "white",
                color: "#5B7FFF",
                border: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 6px 16px rgba(255, 255, 255, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.3)"
              }}
              onClick={() => {
                window.open("https://apps.apple.com/us/app/carlinker/id6753923353", "_blank")
              }}
            >
              
              Tải Ngay
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
