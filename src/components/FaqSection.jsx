"use client"

import { useState } from "react"
import "../styles/FaqSection.css"

const FaqSection = () => {
  const faqs = [
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      question: "Will investors be able to have multiple Common Account Numbers?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(1)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
