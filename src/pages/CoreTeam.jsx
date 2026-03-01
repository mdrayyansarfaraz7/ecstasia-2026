import TeamMemberCard from "../components/essential/TeamCard";
import { Link } from "react-router-dom";

function CoreTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Swarnabha Mitra",
      year: "4th Year",
      isStudent: true,
      fsId: "CO2026-1001",
      course: "B.Tech CSE(AI & ML)",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771232715/qhd4wdnrdc3mp1zy5qms.jpg",
      position: "Cultural Head",
      linkedinURL:
        "https://www.linkedin.com/in/swarnabha-mitra-9168a4269/",
    },

    {
      id: 10000000,
      name: "Harsh Jaiswal",
      year: "4th Year",
      course: "B.Tech CST",
      isStudent: true,
      fsId: "CO2026-1002",
      imageUrl:
        "https://res.cloudinary.com/ddo15zw7d/image/upload/v1770571434/1761401662609_y8btjh.png",
      position: "Convenor",
      linkedinURL:
        "https://www.linkedin.com/in/harsh-jaiswal-1934b426b/",
    },
  ];

  const Teams = [
    { teamName: "Web Dev Team", url: "/ecstasia-family/web-dev-team" },
    { teamName: "Content Team", url: "/ecstasia-family/content-team" },
    { teamName: "Graphics Team", url: "/ecstasia-family/graphics-team" },
    { teamName: "Marketing Team", url: "/ecstasia-family/marketing-team" },
    { teamName: "Logistics Team", url: "/ecstasia-family/logistics-team" },
    { teamName: "PR & Social Media", url: "/ecstasia-family/pr-team" },
    { teamName: "Video Team", url: "/ecstasia-family/video-editing" },

    { teamName: "Anchors Team", url: "/ecstasia-family/anchors" },
    { teamName: "Decoration Team", url: "/ecstasia-family/decoration-team" },
    { teamName: "Finance Team", url: "/ecstasia-family/finance" },
    { teamName: "Club Heads", url: "/ecstasia-family/club-heads" },
    { teamName: "Gymkhana", url: "/ecstasia-family/gymkhana" },
  ];

  return (
    <div
      className="min-h-screen w-full py-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
          url('/wood.webp')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center text-white px-6 w-full max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-heading mb-14">
          Student Body
        </h1>

        {/* ===== CORE MEMBERS FIRST ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center mb-20">
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>

        {/* ===== TEAM NAVIGATION TILES BELOW ===== */}
        <h2 className="text-4xl md:text-6xl font-heading mb-8">
          Explore Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {Teams.map((team, idx) => (
            <Link key={idx} to={team.url} className="group">
              <div
                className={`
          relative
          w-64 md:w-72 lg:w-80
          aspect-3/4
          transition-all duration-300
          hover:-translate-y-2
        `}
              >

                {/* Folder Image */}
                <img
                  src="/file.webp"
                  alt={team.teamName}
                  className="
            w-full h-full object-contain
            drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]
            group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]
            transition-all duration-300
            select-none pointer-events-none
          "
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6">

                  <div className="-rotate-10 text-center">


                    {/* Team Name */}
                    <h3 className="
              font-accent
              text-red-950
              text-lg md:text-xl
              tracking-wide
              uppercase
              transition-all duration-300
              group-hover:-translate-y-1
            ">
                      {team.teamName}
                    </h3>

                    {/* Hover CTA */}
                    <p className="
              mt-3
              text-sm
              text-red-900/80
              opacity-0
              tracking-wider
              transition-all duration-300
              group-hover:opacity-100
            ">
                      OPEN CASE FILE →
                    </p>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>




      </div>
    </div>
  );
}

export default CoreTeam;
