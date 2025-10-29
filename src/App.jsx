"use client"

import { useEffect } from "react"
import { Container } from "react-bootstrap"
import ScrollReveal from "scrollreveal"
import HeroSection from "./components/HeroSection"
import OriginStory from "./components/OriginStory"
import SolutionHighlight from "./components/SolutionHighlight"
import ServiceHighlight from "./components/ServiceHighlight"
import BookingForm from "./components/BookingForm"
import TestimonialScroll from "./components/TestimonialScroll"
import CoreValues from "./components/CoreValue"
import PricingPlans from "./components/PricingPlans"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import WebPlatform from "./components/WebPlatform"
import ProductOverview from "./components/ProductOverview"


export default function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 1200,
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    })

    sr.reveal(".reveal-left", { origin: "left" })
    sr.reveal(".reveal-right", { origin: "right" })
    sr.reveal(".reveal-bottom", { origin: "bottom" })
  }, [])

  return (
    <>
    <div>
      <Header />
      <Container className="mt-5 pt-5">
        <div id="home" className="reveal-bottom">
          <HeroSection />
        </div>
        <div id="story" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <OriginStory />
        </div>
        <div id="solution" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <SolutionHighlight />
        </div>
        <div id="services" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <ServiceHighlight />
        </div>
         <div id="platform" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <WebPlatform />
        </div>
        <div id="product" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <ProductOverview />
        </div>
        
        <div id="reviews" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <TestimonialScroll />
        </div>
        <div id="values" className="reveal-bottom" style={{ marginTop: "18%" }}>
          <CoreValues />
        </div>
        <div id="pricing" className="reveal-right" style={{ marginTop: "18%" }}>
          <PricingPlans />
        </div>
      </Container>
      <Footer />
    </div>
    </>
  )
}
