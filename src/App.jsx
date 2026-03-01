import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CentralRegisteration from "./pages/CentralRegisteration";
import NotFound from "./pages/NotFound";
import SecFallback from "./components/SecFallback";

const Home = lazy(() => import("./pages/Home"));
const EventCategory = lazy(() => import("./pages/EventCategory"));
const FestTimeline = lazy(() => import("./pages/FestTimeline"));
const FacultyHeads = lazy(() => import("./pages/FacultyHeads"));
const FestAdvisors = lazy(() => import("./pages/FestAdvisors"));
const CoreTeam = lazy(() => import("./pages/CoreTeam"));
const WebDevTeam = lazy(() => import("./pages/WebDevTeam"));
const GraphicsTeam = lazy(() => import("./pages/GraphicsTeam"));
const MarketingTeam = lazy(() => import("./pages/MarketingTeam"));
const ContentTeam = lazy(() => import("./pages/ContentTeam"));
const PRTeam = lazy(() => import("./pages/PRTeam"));
const LogesticsTeam = lazy(() => import("./pages/LogesticsTeam"));
const VideoEditingTeam = lazy(() => import("./pages/VideoEditingTeam"));
const AnchorsTeam = lazy(() => import("./pages/AnchorsTeam"));
const FinanceTeam = lazy(() => import("./pages/FinanceTeam"));
const DecorationTeam = lazy(() => import("./pages/DecorationTeam"));
const ClubHeads = lazy(() => import("./pages/ClubHeads"));
const HeadCoordinators = lazy(() => import("./pages/HeadCoordinators"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-category" element={<EventCategory />} />
      <Route path="/fest-timeline" element={<FestTimeline />} />

      <Route path="/ecstasia-family/faculty-heads" element={<FacultyHeads />} />
      <Route path="/ecstasia-family/fest-advisors" element={<FestAdvisors />} />
      <Route path="/ecstasia-family/core-team" element={<CoreTeam />} />

      <Route path="/ecstasia-family/web-dev-team" element={<WebDevTeam />} />
      <Route path="/ecstasia-family/content-team" element={<ContentTeam />} />
      <Route path="/ecstasia-family/anchors" element={<AnchorsTeam/>} />
      <Route path="/ecstasia-family/graphics-team" element={<GraphicsTeam />} />
      <Route path="/ecstasia-family/gymkhana" element={<HeadCoordinators />} />
      <Route
        path="/ecstasia-family/marketing-team"
        element={<MarketingTeam />}
      />
      <Route
        path="/ecstasia-family/logistics-team"
        element={<LogesticsTeam />}
      />
      <Route
        path="/ecstasia-family/finance"
        element={<FinanceTeam/>}
      />
      <Route path="/ecstasia-family/pr-team" element={<PRTeam />} />
      <Route path="/ecstasia-family/decoration-team" element={<DecorationTeam />} />
      <Route path="/ecstasia-family/club-heads" element={<ClubHeads />} />
      <Route
        path="/ecstasia-family/video-editing"
        element={<VideoEditingTeam />}
      />
      <Route path="/central-registration" element={<CentralRegisteration/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default function App() {
  return (
    <Suspense fallback={<SecFallback />}>
      <AppRoutes />
    </Suspense>
  );
}
