import "../styles/StatsSection.css"

const StatsSection = () => {
  const stats = [
    {
      number: "123+",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      number: "12+",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      number: "12+",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      number: "123",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
  ]

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3 className="stat-number">{stat.number}</h3>
            <h4 className="stat-title">{stat.title}</h4>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
