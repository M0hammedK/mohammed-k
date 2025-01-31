import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    // <!-- Contact Section -->
    <section id="contact" className="contact section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          I Thankful for any contacting and I will responce as soon as posibble. I hope you enjoy browsing my website ☺ ♥.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Al-Mukalla, Hadhramout, Yemen</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+967 774 035 345</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>mmm2016alkaf@gmail.com</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15447.696011901413!2d49.13426068459869!3d14.546338456430407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e425d842c827%3A0x4c17c5473e84c6c3!2z2KfZhNmF2YPZhNin2Iwg2KfZhNmK2Y7ZhdmO2YY!5e0!3m2!1sar!2s!4v1738343421899!5m2!1sar!2s"
                className="scale-100 hover:scale-125 duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <ContactForm />
          </div>
          {/* <!-- End Contact Form --> */}
        </div>
      </div>

      {/* <!-- /Contact Section --> */}
    </section>
  );
}
