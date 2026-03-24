export default function HomePage() {
  const metrics = [
    { value: "38%", label: "of global revenue owned through distribution channels" },
    { value: "$17.6M", label: "partner revenue after +13% YoY growth" },
    { value: "27%", label: "cloud growth through partner incentive alignment" },
    { value: "40%", label: "less partner prep time through AI-driven GTM rigor" },
  ];

  const pillars = [
    {
      title: "Partnership Strategy",
      text: "I design partnerships as revenue systems, not one-off relationships. That means clear commercial models, aligned incentives, and execution that compounds over time.",
    },
    {
      title: "Enterprise GTM Execution",
      text: "I work across sales, product, legal, and marketing to turn ambiguous opportunities into repeatable motions that accelerate pipeline and shorten sales cycles.",
    },
    {
      title: "Relationship-Led Growth",
      text: "My edge is building trust quickly, translating complexity into business value, and creating momentum with customers, partners, and internal stakeholders.",
    },
  ];

  const wins = [
    {
      company: "SpyCloud",
      role: "Strategic Alliance Manager",
      outcome: "Turned early-stage alliances into a repeatable GTM engine",
      bullets: [
        "Built commercial frameworks, incentive models, and deal structures that improved adoption and recurring revenue.",
        "Standardized partner deal models across product, legal, sales, and marketing to remove approval friction.",
        "Brought AI-driven operating rigor into partner execution to improve qualification quality and decision speed.",
      ],
    },
    {
      company: "Lifesize",
      role: "Director, Distribution, Americas",
      outcome: "Scaled a major channel into a measurable growth engine",
      bullets: [
        "Owned channels responsible for 38% of global revenue and drove +13% YoY growth to $17.6M.",
        "Accelerated cloud revenue growth by +27% through incentive alignment, enablement, and co-branded GTM campaigns.",
        "Reduced partner concentration risk by expanding regional resellers and launching focus-account programs delivering +60–135% YoY growth.",
      ],
    },
    {
      company: "Venture Technologies",
      role: "Account Manager",
      outcome: "Built the commercial foundation early",
      bullets: [
        "Advanced from inside sales to account manager while owning the full sales cycle across public-sector accounts.",
        "Sold complex IT, collaboration, cloud, and infrastructure solutions with Cisco, VMware, Microsoft, and Lifesize.",
        "Developed the relationship-first selling style that still anchors how I lead today.",
      ],
    },
  ];

  const traits = [
    "Direct communicator",
    "Strategic but practical",
    "Calm under pressure",
    "Relationship-driven",
    "Commercially minded",
    "Action-oriented",
  ];

  const proof = [
    "Trusted by executives to bring structure to ambiguity.",
    "Known for turning partnerships into durable revenue channels.",
    "Direct, practical, and action-oriented without losing the human side of the relationship.",
    "Comfortable operating in fast-moving environments where speed, ownership, and influence matter.",
  ];

  const recommendations = [
    {
      quote:
        "Courtney has exceptional communication skills that allowed him to introduce our partners to new products and technologies while maintaining strong, trusted relationships. He was a valuable bridge between our team and our partners.",
      name: "Dan Blankenship",
      title: "Sales Engineer at SpyCloud",
    },
    {
      quote:
        "Courtney consistently demonstrated a unique ability to build trusted relationships among both his peers and his customers alike. He used his no nonsense business mentality to translate technology into bottom line value to his customers.",
      name: "Clayton Reed",
      title: "Former SVP, Global Sales",
    },
    {
      quote:
        "Courtney is a first rate businessman. He understands that all business is built on relationships. He emphasizes a human-first approach to his engagements.",
      name: "James Shank",
      title: "Director of Threat Operations",
    },
    {
      quote:
        "He truly exemplifies exceptional client partnership. Courtney has a keen understanding of subscription models and knows exactly how to sell value rather than just features.",
      name: "Dmitri Vellikok",
      title: "Product and Business Leader",
    },
    {
      quote:
        "He is thoughtful, collaborative and an excellent communicator. He is resourceful and knows how to rally the troops to get things done for customers and partners.",
      name: "Amy Downs",
      title: "Founder & CEO, Customer Obsessing Consulting",
    },
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <section className="hero card">
        <div className="hero-copy">
          <span className="pill">GTM • Strategic Partnerships • Revenue Leadership</span>
          <h1>Building meaningful relationships that turn into revenue.</h1>
          <p className="lede">
            I help technology companies turn partnerships into growth engines by aligning strategy,
            execution, and trust across the GTM ecosystem.
          </p>
          <div className="cta-row">
            <a href="mailto:courtlash85@gmail.com" className="btn btn-primary">
              Start a conversation
            </a>
            <a
              href="https://www.linkedin.com/in/courtneylashley/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="headshot-card">
            <div className="eyebrow">Headshot</div>
            <div className="headshot-wrap">
              <img src="/headshot.jpg" alt="Courtney Lashley headshot" className="headshot" />
            </div>
            <p className="small-copy">
              Strategic partnerships leader focused on building trust, driving adoption, and accelerating revenue.
            </p>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.value} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-two">
        <div className="card light-card">
          <div className="eyebrow dark">Why companies call me</div>
          <h2>I build partner strategies that actually show up in pipeline, revenue, and market traction.</h2>
          <p className="body-copy dark-copy">
            My work sits at the intersection of strategic partnerships, enterprise sales, and GTM execution. I am at my best
            when the opportunity is important, the path is not obvious, and the business needs someone who can bring structure,
            momentum, and commercial clarity.
          </p>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="eyebrow">How I show up</div>
          <h2>Direct. Practical. High-trust.</h2>
          <p className="body-copy">
            I am wired to notice what is changing, communicate clearly, and create forward motion. That combination helps me
            build strong relationships without losing commercial discipline.
          </p>

          <div className="tags">
            {traits.map((trait) => (
              <span key={trait} className="tag">
                {trait}
              </span>
            ))}
          </div>

          <div className="brand-anchor">
            <div className="eyebrow">Brand anchor</div>
            <p>I build relationships that become revenue engines.</p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected wins</div>
            <h2>Proof that the strategy translates into outcomes</h2>
          </div>
          <p className="section-note">
            This is the part recruiters and executives care about most: what changed because I was in the room.
          </p>
        </div>

        <div className="wins-grid">
          {wins.map((win) => (
            <article key={win.company} className="win-card">
              <div className="eyebrow">{win.company}</div>
              <h3>{win.role}</h3>
              <p className="body-copy">{win.outcome}</p>
              <ul className="bullet-list">
                {win.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-two">
        <div className="card light-card">
          <div className="eyebrow dark">Why this matters</div>
          <h2>Partnerships should create leverage, not noise.</h2>
          <p className="body-copy dark-copy">
            The strongest GTM leaders know that partnerships only matter when they create real market leverage. My approach is
            built around that standard: clear economics, real adoption, faster cycles, stronger alignment, and a path to
            durable recurring revenue.
          </p>

          <div className="proof-list">
            {proof.map((item) => (
              <div key={item} className="proof-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="eyebrow">What people say</div>
          <h2>Trusted across teams, partners, and executive stakeholders.</h2>
          <div className="recommendation-list">
            {recommendations.map((item) => (
              <blockquote key={item.name} className="recommendation-card">
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="eyebrow">Ideal fit</div>
        <h2>Best aligned for companies that need both strategic thinking and commercial execution.</h2>
        <div className="fit-grid">
          {[
            "Director / Senior Director, Strategic Partnerships",
            "Head of Alliances or Ecosystem Growth",
            "GTM Partnerships leadership for SaaS, security, cloud, or AI",
            "Commercial roles that sit between partner strategy and enterprise sales",
          ].map((item) => (
            <div key={item} className="fit-card">
              {item}
            </div>
          ))}
        </div>

        <div className="recruiter-takeaway">
          <div className="eyebrow">Recruiter takeaway</div>
          <p>This is not a relationship manager profile. It is a revenue-minded partnerships leader profile.</p>
        </div>
      </section>

      <footer className="card footer-card">
        <div>
          <h2>Let’s build something that moves revenue.</h2>
          <p className="body-copy">
            Based in Dallas–Fort Worth. Open to conversations around strategic partnerships, GTM leadership, and growth roles.
          </p>
        </div>

        <div className="cta-row">
          <a href="mailto:courtlash85@gmail.com" className="btn btn-primary">
            Email Courtney
          </a>
          <a
            href="https://www.linkedin.com/in/courtneylashley/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn Profile
          </a>
        </div>
      </footer>
    </main>
  );
}
