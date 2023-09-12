import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form values using the state variables (name, email, subject, message)
  };

  return (
    <section className="mb-4 contact">
    <h2 className="h1-responsive font-weight-bold text-center my-4">
      Contact us
    </h2>
    <p className="text-center w-responsive mx-auto mb-5">
      Do you have any questions? 
    </p>
    <div className="row">
      <div className="col-md-9 mb-md-0 mb-5">
        <form
          id="contact-form"
          name="contact-form"
          action="mail.php"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
                <label htmlFor="name" className="">
                  Your name
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
                <label htmlFor="email" className="">
                  Your email
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                />
                <label htmlFor="subject" className="">
                  Subject
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                ></textarea>
                <label htmlFor="message">Your message</label>
              </div>
            </div>
          </div>
          <div className="text-center text-md-left">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
          <div className="status"></div>
        </form>
      </div>
      <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
          <li>
            <i className="fas fa-map-marker-alt fa-2x"></i>
            <p>cairo</p>
          </li>
          <li>
            <i className="fas fa-phone mt-4 fa-2x"></i>
            <p>+20 01024283913</p>
          </li>
          <li>
            <i className="fas fa-envelope mt-4 fa-2x"></i>
            <p>mo7amede9am@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  );
}

export default ContactForm;