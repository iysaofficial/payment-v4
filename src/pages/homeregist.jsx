import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";

function HomeRegist() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Registration</h1>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h2 className="mx-auto">REGISTRATION FORM</h2>
              <h1 className="mx-auto">
                Choose Categories Participant for Registration ISPC 2024
              </h1>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="/indonesiaparticipants" legacyBehavior>
              <a className="btn btn-action text-center mt-5 me-lg-5">
                Indonesia Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="/internationalparticipants" legacyBehavior>
              <a className="btn btn-action text-center mt-5 me-lg-5">
              International Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
