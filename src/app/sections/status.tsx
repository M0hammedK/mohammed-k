import React from 'react'

export default function Status() {
  return (
    <div>
            {/* <!-- Stats Section --> */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <strong>Happy Clients</strong> <h1>10</h1>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <strong>Projects</strong> <h1>12</h1>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <strong>Hours Of Support</strong> <h1>25</h1>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <strong>Hard Workers</strong> <h1>30</h1>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Stats Section --> */}
    </div>
  )
}
