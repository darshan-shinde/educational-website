"use client"

import { useState, useEffect } from "react"
import "../styles/HeroSlider.css"

const HeroSlider = () => {
  const slides = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusm nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      image: "/Mask Group 99.svg",
    },
    {
      title: "Education Excellence",
      description:
        "Discover our world-class educational programs designed to help you succeed in your career. Our expert instructors and comprehensive curriculum ensure you get the best education possible.",
      image: "/Mask Group 99.svg",
    },
    {
      title: "Research Opportunities",
      description:
        "Explore cutting-edge research opportunities that will challenge your thinking and expand your knowledge. Join our community of innovative thinkers and problem solvers.",
      image: "/Mask Group 99.svg",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNextSlide()
    }

    if (touchStart - touchEnd < -50) {
      handlePrevSlide()
    }
  }

  return (
    <section
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="know-more-btn">
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <div className="slide-image">
              <img src={slide.image || "/placeholder.svg?height=400&width=400"} alt="Hero" />
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default HeroSlider
