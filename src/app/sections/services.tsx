import React from 'react'

export default function Services() {
  return (
    <div>
        
    <section id="services" className="services section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>My Services</h2>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Backend Website</a></h4>
              <p className="description">Create baackend server code for wibsite by using Node Express</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Android Sowtwere</a></h4>
              <p className="description">Create a Android software Frontend and Backend using Java or React Native</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Photoshop</a></h4>
              <p className="description">Edit Picture and enhance images using Adobe Photoshop</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Edit Vedio</a></h4>
              <p className="description">edit video or or create on by using VSDC application</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Problem Solving</a></h4>
              <p className="description">Providing solutoins for tough problems in programs or enhance algrithms</p>
            </div>
          </div>
            {/* <!-- End Service Item --> */}

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
            <div>
              <h4 className="title"><a href="service-details.html" className="stretched-link">Create Database </a></h4>
              <p className="description">Create Database and make it's relationsheps and make backups or restore them</p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Services Section --> */}
    </div>
  )
}
