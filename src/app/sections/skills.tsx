export default function Skills() {
  return (
    <div>
      {/* <!-- Skills Section --> */}
      <section id="skills" className="skills section light-background">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
        </div>
        {/* !-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>C#</span> <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div className="progress">
                <span className="skill">
                  <span>Node Express</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div className="progress">
                <span className="skill">
                  <span>Next.js</span> <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>Java</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div className="progress">
                <span className="skill">
                  <span>Python</span> <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div className="progress">
                <span className="skill">
                  <span>JavaScript</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              {/* <!-- End Skills Item --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Skills Section --> */}
    </div>
  );
}
