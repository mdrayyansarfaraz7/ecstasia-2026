import TeamMemberCard from "../components/essential/TeamCard.jsx";
import { Link } from "react-router-dom";

function CoreTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Swarnabha Mitra",
      year: "4th Year",
      isStudent:true,
      fsId:"CO2026-1001",
      course: "B.Tech CSE(AI & ML)",
      imageUrl:
        "https://res.cloudinary.com/ddo15zw7d/image/upload/v1770571309/1740456787975_ub000o.jpg",
      position: "Gymkhana Convenor",
      linkedinURL:
        "https://www.linkedin.com/in/swarnabha-mitra-9168a4269/",
    },
  
    {
      id: 10000000,
      name: "Harsh Jaiswal",
      year: "4th Year",
      course: "B.Tech CST",
      isStudent:true,
      fsId:"CO2026-1002",
      imageUrl:
        "https://res.cloudinary.com/ddo15zw7d/image/upload/v1770571434/1761401662609_y8btjh.png",
      position: "Convenor",
      linkedinURL:
        "https://www.linkedin.com/in/harsh-jaiswal-1934b426b/",
    },
  ];

  const Teams = [
    { teamName: "Web Dev", url: "/ecstasia-family/web-dev-team" },
    { teamName: "Content", url: "/ecstasia-family/content-team" },
    { teamName: "Graphics", url: "/ecstasia-family/graphics-team" },
    { teamName: "Marketing", url: "/ecstasia-family/marketing-team" },
    { teamName: "Logistics", url: "/ecstasia-family/logistics-team" },
    { teamName: "PR & Social Media", url: "/ecstasia-family/pr-team" },
    { teamName: "Decoration", url: "/ecstasia-family/logistics-team" },
    { teamName: "Finance", url: "/ecstasia-family/pr-team" },
  ];

  return (
    <div
      className="min-h-screen w-full py-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
          url('/wood.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {Teams.map((team, idx) => (
            <Link key={idx} to={team.url} className="group">
              <div className="
        relative
        w-44 md:w-52 lg:w-64
        aspect-3/4
        transition-transform duration-300
        group-hover:scale-105
      ">

                {/* Folder Background */}
                <img
                  src="/file.png"
                  alt={team.teamName}
                  className="w-full h-full object-contain drop-shadow-xl select-none pointer-events-none"
                />

                {/* Diagonal Overlay Text Layer */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="-rotate-12 text-center">

                    {/* Team Name — Always Visible */}
                    <div
                      className="
                font-accent
                text-red-950
                text-xl md:text-2xl
                tracking-wide
                transition-all duration-500
                group-hover:-translate-y-2
              "
                    >
                      {team.teamName} Team
                    </div>

                    {/* View Team — Only On Hover */}
                    <div
                      className="
                font-accent
                text-sm
                text-red-900/80
                mt-2
                opacity-0
                scale-90
                transition-all duration-500
                group-hover:opacity-100
                group-hover:scale-100
              "
                    >
                      View Team
                    </div>

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
