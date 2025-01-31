export default function About() {
  return (
    <div>
    {/* <!-- About Section --> */}
    <section id="about" className="about section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I'm Mohammed Al-Kaf Backend & Mobile devoloper. I like learn all that is new and try to make my customres hubby about my works :)</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="me.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Backend Delovoper &amp; Mobile Developer</h2>
            <p className="fst-italic py-3">
              I like the challanges that come with this job these are improving my problem solving skill.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>27 Mars 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+96774035345</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Al-Mukalla, Yemen</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mmm2016alkaf@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /About Section --> */}
</div>
  );
}
