
import TeamMemberCard from '../components/essential/TeamCard';
function GraphicsTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Md Rayyan Sarfaraz",
      year: "",
      isStudent:false,
      fsId: "CT2026-2001",
      course: " ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770918058/d4zgpnbamltec7ueucob.png",
      position: "Web Dev Co-Lead",
      linkedinURL:
        "https://www.linkedin.com/in/md-rayyan-sarfaraz-79087428b/",
    }
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
      <div className="text-center text-white px-6 w-full max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-heading mb-16">
          Graphics Team
        </h1>

        {/* AUTO-FIT GRID — PERFECT ALIGNMENT */}
        <div
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            gap-12 md:gap-14
            justify-items-center
          "
        >
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.fsId} {...member} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default GraphicsTeam