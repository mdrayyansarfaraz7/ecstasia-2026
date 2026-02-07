import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Timer from "./components/Timer";
import AboutUs from "./components/AboutUs";
import Symphony from "./components/Symphony";
import Timeline from "./components/Timeline";
import ExcitingEvents from "./components/ExcitingEvents";
import GallerySection from "./components/GallerySection";
import EcstasiaFamily from "./components/EcstasiaFamily";
import PreviousPartners from "./components/PreviousPartners";
import Bottom from "./components/Bottom";

function Home() {
  return (
    <>
      <Hero />
      <Timer />
      <AboutUs />
      <Symphony />
      <ExcitingEvents />
      <Timeline />
      <GallerySection/>
      <EcstasiaFamily/>
      <PreviousPartners/>
      <Bottom/>
    </>
  )
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
