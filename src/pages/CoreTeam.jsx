import TeamMemberCard from "../components/essential/TeamCard.jsx";
import { Link } from "react-router-dom";

function CoreTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Swarnabha Mitra",
      year: "4th",
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
      year: "4th",
      course: "B.Tech CST",
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
        <h2 className="text-3xl md:text-4xl font-heading mb-8">
          Explore Teams
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {Teams.map((team, idx) => (
            <Link key={idx} to={team.url} className="group">
              <div className="relative w-48 md:w-56 aspect-3/4 transition-transform duration-300 group-hover:scale-105">

                {/* parchment image */}
                <img
                  src="/Page.png"
                  alt={team.teamName}
                  className="w-full h-full object-contain drop-shadow-xl"
                />

                {/* overlay text */}
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <span className="text-xl md:text-2xl font-bold tracking-wide text-red-950 font-accent">
                    {team.teamName} Team
                  </span>
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
