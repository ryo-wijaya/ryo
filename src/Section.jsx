export default function Section({ id, title, heroTitle, children }) {
  return (
    <section id={id} className="portfolio-section d-flex align-items-center position-relative">
      <div className="section-inner w-100">
        {heroTitle ? (
          <h2 className="hero-name fw-bold">{title}</h2>
        ) : (
          <h2 className="section-title fw-bold">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
