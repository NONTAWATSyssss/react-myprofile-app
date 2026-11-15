import { useState } from 'react'

function ContactMe() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <h1 id="contact-title" className="page-title">Contact <span className="text-accent">Me</span></h1>
      <p className="contact-intro">Let’s get in touch!</p>
      <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
        <div className="line-field">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required />
        </div>
        <div className="line-field">
          <label className="sr-only" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" />
        </div>
        <div className="line-field">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required />
        </div>
        <div className="line-field">
          <label className="sr-only" htmlFor="address">Adress</label>
          <input id="address" name="address" type="text" placeholder="Adress" autoComplete="street-address" />
        </div>
        <div className="line-field message-field">
          <label className="sr-only" htmlFor="content">Content</label>
          <textarea id="content" name="content" placeholder="Content" rows={5} required />
        </div>
        <label className="newsletter-field">
          <input type="checkbox" name="newsletter" />
          <span>I would like to receive the newsletter.</span>
        </label>
        <button className="submit-button" type="submit">Submit</button>
        <p className="form-status" role="status">
          {submitted ? 'Demo submitted successfully. No message was sent.' : ''}
        </p>
      </form>
    </section>
  )
}

export default ContactMe
