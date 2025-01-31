"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvgzrkeg");
  try{
    if (state.succeeded) {
      return <h4>Thanks, I will response as soon as possible ♥</h4>;
    }
  }catch(err){}
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="name-field" className="pb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name-field"
            className="form-control"
            required
          />
        </div>

        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <div className="col-md-6">
          <label htmlFor="email-field" className="pb-2">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email-field"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="col-md-12">
          <label htmlFor="subject-field" className="pb-2">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject-field"
            required
          />

          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="message-field" className="pb-2">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            rows={10}
            id="message-field"
            required
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="col-md-12 text-center">

          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
          <ValidationError errors={state.errors} />
        </div>
      </div>
    </form>
  );
}
