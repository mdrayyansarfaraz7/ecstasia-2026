import { lazy, Suspense } from "react";
import Divider from "../components/divider/Divider";
import DividerSingle from "../components/divider/DividerSingle";
import Nav from "../components/essential/Nav";
import SecFallback from "../components/SecFallback";

const Hero = lazy(() => import("../components/Hero"));
const Timer = lazy(() => import("../components/Timer"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Symphony = lazy(() => import("../components/Symphony"));
const Timeline = lazy(() => import("../components/Timeline"));
const ExcitingEvents = lazy(() => import("../components/ExcitingEvents"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const EcstasiaFamily = lazy(() => import("../components/EcstasiaFamily"));
const PreviousPartners = lazy(() => import("../components/PreviousPartners"));
const Bottom = lazy(() => import("../components/Bottom"));
const Footer = lazy(() => import("../components/essential/Footer"));

const Home = () => {
  return (
    <Suspense fallback={<SecFallback />}>
      <Nav />
      <Hero />
      <Divider />
      <Timer />
      <AboutUs />
      <Symphony />
      <DividerSingle />
      <ExcitingEvents />
      <DividerSingle />
      <Timeline />
      <DividerSingle />
      <GallerySection />
      <DividerSingle />
      <EcstasiaFamily />
      <DividerSingle />
      <PreviousPartners />
      <Bottom />
      <Footer />
    </Suspense>
  );
};

export default Home;
