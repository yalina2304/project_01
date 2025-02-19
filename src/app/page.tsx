import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./layout";
import { Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Stories from "../components/Stories";
import Technologies from "../components/Technologies";
import Team from "../components/Team";
import Overview from "../components/Overview";
import Testimonials from "../components/Testimonials";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <Services />
        <Stories />
        <Technologies />
        <Team />
        <Overview />
        <Testimonials />
        <Contact />
      </Container>
    </main>
  );
}
