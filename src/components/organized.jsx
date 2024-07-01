import Image from "next/image";

function Organized() {
  return (
    <>
      <section id="organized" className="organized-section">
        <div className="image-content row text-center mx-auto">
          <div className="text col-12 col-lg-3 ">
            <h2>ORGANIZED BY :</h2>
          </div>
          <div className="image col-12 col-lg-9 text-lg-start">
            <Image
              src="/assets/logo/LogoIYSA.WebP"
              className="img-fluid m-3 m-lg-5"
              width={250} // Sesuaikan lebar gambar
              height={50} // Sesuaikan tinggi gambar
              alt="IYSA LOGO"
            />
            <Image
              src="/assets/logo/UMMremovebg.png"
              className="img-fluid m-3 m-lg-5"
              width={150} // Sesuaikan lebar gambar
              height={50} // Sesuaikan tinggi gambar
              alt="UMM LOGO"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Organized;
