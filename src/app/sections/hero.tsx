
export default function Hero() {

  return (
    <div className="main">

    {/* <!-- Hero Section --> */}
    <section id="hero" className="hero section dark-background">

      <img src="main.jpg" alt="" data-aos="fade-in"/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Mohammed Al-Kaf</h2>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"><u>Backend Devoloper</u></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </section>
    {/* <!-- /Hero Section --> */}

  </div>
  );
}