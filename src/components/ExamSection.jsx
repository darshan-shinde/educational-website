import "../styles/ExamSection.css";

const ExamSection = () => {
  const examItems = [
    {
      date: "02th October 2014",
      level: "Level 1 exam",
    },
    {
      date: "Nov-Dec 2016",
      level: "Level 2",
      additionalInfo: ["Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      date: "Ongoing this year",
      level: "Level 3 (Grad)",
    },
  ];

  return (
    <section className="exam-section">
      <div className="exam-container">
        <div className="exam-header">
          <div className="header-text">
            <h2>
              Upcoming
              <br />
              Examinations
            </h2>
            <p>
              Enquire about the examination &<br />
              register for the exams
            </p>
          </div>
          <div className="exam-items">
            {examItems.map((item, index) => (
              <div key={index} className="exam-item">
                <div className="exam-icon">
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
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="exam-details">
                  <h3>{item.date}</h3>
                  <p>{item.level}</p>
                  {item.additionalInfo &&
                    item.additionalInfo.map((info, i) => <p key={i}>{info}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamSection;
