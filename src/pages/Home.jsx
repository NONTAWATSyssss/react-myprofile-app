function Home() {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <p className="eyebrow">Lets Work <span className="text-accent">Together !</span></p>
      <h1 id="home-title" className="intro-heading">
        <span className="block">Hi From <span className="text-accent">Nontawat </span> ,</span>
        Interactive Designer &amp; Fullstack Web Developer
      </h1>
      <p className="intro-description text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem .
      </p>
      <dl className="home-stats">
        <div>
          <dt className="stat-value text-accent">3+</dt>
          <dd className="stat-label text-muted">Years of<br />Experience</dd>
        </div>
        <div>
          <dt className="stat-value text-accent">10+</dt>
          <dd className="stat-label text-muted">Projects<br />Completed</dd>
        </div>
      </dl>
    </section>
  )
}

export default Home
