import TeamMemberCard from "../components/essential/TeamCard";

function FacultyHeads() {
  const coreTeam = [
    {
      id: 1,
      name: "Prof Dr. Rajashree Paul",
      year: "",
      isStudent:false,
      fsId: "FA2026-2001",
      course: " ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770915490/r6ecoygikzrjbefsgteb.jpg",
      position: "Director IQAC",
      linkedinURL:
        "https://www.linkedin.com/in/rajashree-paul-6482721a/",
    },
    {
      id: 2,
      name: "Prof Dr. Susmita Mukherjee",
      year: "4th Year",
      course: "B.Tech CST",
      isStudent: false,
      fsId: "FA2026-2002",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770915725/hl8ceq99u4wfyfzg3bt1.jpg",
      position: "Gymkhana Faculty Head",
      linkedinURL:
        "https://www.linkedin.com/in/susmitamukherjee-environmentalist/",
    },
    {
      id: 3,
      name: "Prof Dr. Ayanita Banerjee",
      year: " ",
      course: " ",
      isStudent: false,
      fsId: "FA2026-2003",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770915879/ktlxp524ch8kpkholh1c.jpg",
      position: "Faculty Coordinator",
      linkedinURL:
        "https://www.linkedin.com/in/dr-ayanita-banerjee-730636249/",
    },
        {
      id: 4,
      name: "Prof Dr. Arnab Ghosh",
      year: "",
      isStudent:false,
      fsId: "FA2026-2004",
      course: " ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770916145/ay016xexkwydfbvifzct.jpg",
      position: "Faculty Coordinator",
      linkedinURL:
        "https://www.linkedin.com/in/dr-arnab-ghosh-059394119/",
    },
    {
      id: 5,
      name: "Prof Dr. Abhishek Halder",
      year: "",
      course: "",
      isStudent: false,
      fsId: "FA2026-2005",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770916233/iboresof3lfv9ztnykxp.jpg",
      position: "Faculty Coordinator",
      linkedinURL:
        "#",
    },
    {
      id: 6,
      name: "Prof Dr. Chiradeep Mukherjee",
      year: " ",
      course: " ",
      isStudent: false,
      fsId: "FA2026-2006",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770916437/jemhgfdypwantxfduni0.jpg",
      position: "Faculty Coordinator",
      linkedinURL:
        "https://www.linkedin.com/in/chiradeep-mukherjee-38a0b019/",
    },
        {
      id: 7,
      name: "Prof Dr. Dibyajit Lahiri",
      year: " ",
      course: " ",
      isStudent: false,
      fsId: "FA2026-2007",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770916547/wqcrph71npkrse9xdvax.jpg",
      position: "Faculty Coordinator",
      linkedinURL:
        "https://www.linkedin.com/in/dr-dibyajit-lahiri-a71611142/",
    },
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
          Faculty Heads
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

export default FacultyHeads;
