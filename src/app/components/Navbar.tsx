import Link from 'next/link'

function Navbar() {


  return (
    <div id="header" className="header dark-background d-flex flex-column pt-3">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <Link href="#hero" className="logo d-flex align-items-center justify-content-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
       <img src="/me.jpg" alt=""/>
      <h1 className="sitename">Mohammed Al-Kaf</h1>
    </Link>

    <div className="social-links text-center">
      <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/mmm.alkaf" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/m0hammed._.k" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="https://github.com/M0hammedK" className="google-plus"><i className="bi bi-github"></i></a>
      <a href="https://www.linkedin.com/in/mohammed-al-kaf-583942289" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#skills"><i className="bi bi-award navicon"></i> Skills</a></li>
        <li><a href="#projects"><i className="bi bi-files navicon"></i> Projects</a></li>
        <li><a href="#services"><i className="bi bi-person-gear navicon"></i> Services</a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </div>

  );
}

export default Navbar;
