import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import MainHero from "../components/mainhero";
import Organized from "../components/organized";
import About from "../components/about";
import Categories from "../components/categories";
import BackToTop from "../components/backtotop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <MainHero />
      <Organized />
      <About />
      <Categories />
      <BackToTop />
      <Footer />
    </>
  );
}
