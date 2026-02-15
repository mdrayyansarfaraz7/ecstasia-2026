import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Divider from "./components/divider/Divider";
import DividerSingle from "./components/divider/DividerSingle";
import Nav from "./components/essential/Nav";
import SecFallback from "./components/SecFallback";

const Hero = lazy(() => import("./components/Hero"));
const Timer = lazy(() => import("./components/Timer"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Symphony = lazy(() => import("./components/Symphony"));
const Timeline = lazy(() => import("./components/Timeline"));
const ExcitingEvents = lazy(() => import("./components/ExcitingEvents"));
const GallerySection = lazy(() => import("./components/GallerySection"));
const EcstasiaFamily = lazy(() => import("./components/EcstasiaFamily"));
const PreviousPartners = lazy(() => import("./components/PreviousPartners"));
const Bottom = lazy(() => import("./components/Bottom"));
const Footer = lazy(() => import("./components/essential/Footer"));
const EventCategory = lazy(() => import("./pages/EventCategory"));
const FestTimeline = lazy(() => import("./pages/FestTimeline"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const FacultyHeads = lazy(() => import("./pages/FacultyHeads"));
const FestAdvisors = lazy(() => import("./pages/FestAdvisors"));
const CoreTeam = lazy(() => import("./pages/CoreTeam"));
const WebDevTeam = lazy(() => import("./pages/WebDevTeam"));
const GraphicsTeam = lazy(() => import("./pages/GraphicsTeam"));
const MarketingTeam = lazy(() => import("./pages/MarketingTeam"));
const ContentTeam = lazy(() => import("./pages/ContentTeam"));
const PRTeam = lazy(() => import("./pages/PRTeam"));
const LogesticsTeam = lazy(() => import("./pages/LogesticsTeam"));

function Home() {
  return (
    <>
      <Nav />
      <Suspense fallback={<SecFallback />}>
        <Hero />
        <Divider />
        <Timer />
        <AboutUs />
        <Symphony />
        <DividerSingle />
        <ExcitingEvents />
        <DividerSingle />
        <Timeline />
        <GallerySection />
        <DividerSingle />
        <EcstasiaFamily />
        <DividerSingle />
        <PreviousPartners />
        <Bottom />
        <Footer />
      </Suspense>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-category/:cat" element={<EventCategory />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/fest-timeline" element={<FestTimeline />} />

      <Route path="/ecstasia-family/faculty-heads" element={<FacultyHeads />} />
      <Route path="/ecstasia-family/fest-advisors" element={<FestAdvisors />} />
      <Route path="/ecstasia-family/core-team" element={<CoreTeam />} />

      <Route path="/ecstasia-family/web-dev-team" element={<WebDevTeam />} />
      <Route path="/ecstasia-family/content-team" element={<ContentTeam />} />
      <Route path="/ecstasia-family/graphics-team" element={<GraphicsTeam />} />
      <Route
        path="/ecstasia-family/marketing-team"
        element={<MarketingTeam />}
      />
      <Route
        path="/ecstasia-family/logistics-team"
        element={<LogesticsTeam />}
      />
      <Route path="/ecstasia-family/pr-team" element={<PRTeam />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
