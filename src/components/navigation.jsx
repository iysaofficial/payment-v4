import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const navigation = () => {
  const handleAboutClick = (e) => {
    e.preventDefault();

    // Mendapatkan id dari href
    const targetId = e.target.getAttribute("href").substring(1);

    // Mendapatkan elemen dengan id "about"
    const targetElement = document.getElementById(targetId);

    // Scroll ke elemen tersebut
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // Navbar
    <section>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>ISPC OFFICIAL</title>
        {/* <!-- Bootstrap CSS --> */} z
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <!-- Akhir Bootstrap CSS --> */}
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <Image
            src="/assets/logo/ISPC LOGO.png"
            width={100} // Sesuaikan lebar gambar
            height={50} // Sesuaikan tinggi gambar
            className="img-fluid"
            alt="ISPC LOGO"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link href="/" legacyBehavior>
                <a className="nav-item nav-link">Home</a>
              </Link>
              <Link href="/#about" legacyBehavior>
                <a className="nav-item nav-link">About</a>
              </Link>
              {/* <a className="nav-item nav-link" href="#">Liputan Media</a> */}
              {/* <NavDropdown title="Gallery" id="nav-dropdown">
                                        <NavDropdown.Item eventKey="3.1" href='https://drive.google.com/drive/folders/12NlMzG5aGikdjkfiZWr8DkTf3kP3ts6y?usp=drive_link' target='_blank'>2023</NavDropdown.Item>
                                    </NavDropdown> */}

              <Link href="/faq" legacyBehavior>
                <a className="nav-item nav-link">FAQ </a>
              </Link>
              <Link href="/contactpages" legacyBehavior>
                <a className="nav-item nav-link">Contact </a>
              </Link>
              <Link href="/homeregist" legacyBehavior>
                <a className="nav-item nav-link">Regist here! </a>
              </Link>
            </div>
            <div className="ms-lg-3">
              <a
                href="https://drive.google.com/file/d/1STnLOXA-9nVlKTTcp9WZ-mY3bjoWDbVA/view?usp=sharing"
                target="_blank"
                className="btn btn-primary btn-action"
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default navigation;