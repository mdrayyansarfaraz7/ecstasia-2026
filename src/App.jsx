import { Routes, Route } from "react-router-dom";
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
import EventCategory from "./pages/EventCategory";
import FestTimeline from "./pages/FestTimeline";
import NotFound from "./pages/NotFound";
import EventDetails from "./pages/EventDetails";
import FacultyHeads from "./pages/FacultyHeads";
import FestAdvisors from "./pages/FestAdvisors";
import CoreTeam from "./pages/CoreTeam";
import WebDevTeam from "./pages/WebDevTeam";
import GraphicsTeam from "./pages/GraphicsTeam";
import MarketingTeam from "./pages/MarketingTeam";
import ContentTeam from "./pages/ContentTeam";
import PRTeam from "./pages/PRTeam";
import LogesticsTeam from "./pages/LogesticsTeam";
import Divider from "./components/divider/Divider";
import DividerSingle from "./components/divider/DividerSingle";
import Nav from "./components/essential/Nav";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <Timer />
      <AboutUs />
      <Symphony />
      <ExcitingEvents />
      <Timeline />
      <GallerySection />
      <DividerSingle />
      <EcstasiaFamily />
      <DividerSingle />
      <PreviousPartners />
      <Bottom />
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
