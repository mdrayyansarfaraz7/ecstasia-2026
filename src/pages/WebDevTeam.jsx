import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function WebDevTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Md Rayyan Sarfaraz",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2001",
      course: "CSE (AI & ML) ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1770918058/d4zgpnbamltec7ueucob.png",
      position: "Lead",
      linkedinURL:
        "https://www.linkedin.com/in/md-rayyan-sarfaraz-79087428b/",
    },
    {
      id: 1,
      name: "Hood Rasool",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2002",
      course: "CSE (AI & ML) ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771225725/jjxnjeqnvj07k4ae63og.png",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/hood-rasool/",
    },
    {
      id: 1,
      name: "Justina Gomes",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2003",
      course: "CSIT ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771225888/yccd8rtfylgukq02xj2u.jpg",
      position: "UI/UX Designer",
      linkedinURL:
        "https://www.linkedin.com/in/justina-gomes-899b78234/",
    }
    ,
    {
      id: 1,
      name: "Annesha Gayen",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2004",
      course: "CSIT ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771226101/bu6fjskpauicsai4zvxp.jpg",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/annesha-gayen/",
    },
    {
      id: 1,
      name: "Navonil Sarkar",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2005",
      course: "CSE (AI & ML) ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771226716/bpcmkitnnsxzmlhvl5b8.png",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/hritesh-saha/",
    },
    {
      id: 1,
      name: "Hritesh Saha",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2006",
      course: "CSE",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771226650/qig8gamalwvfqlqprcki.jpg",
      position: "Developer",
      linkedinURL:
        "",
    },
    {
      id: 1,
      name: "Avirup Ghoshal",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2007",
      course: "CSE ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771226821/nway8254vw5k92ewo9sq.jpg",
      position: "Developer",
      linkedinURL:
        "",
    },
    {
      id: 1,
      name: "Dipjit Sen",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2008",
      course: "CSE ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771227430/pikvwwj3wxde2gtcybrg.png",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/debjit--sen",
    },
    {
      id: 1,
      name: "Dibyajyoti Singha",
      year: "3rd Year",
      isStudent: true,
      fsId: "WD2026-2009",
      course: "CSE",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771227492/zmqbhn7uytulo6obgkfe.png",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/dibyajyoti-singha-41274828a/",
    },
    {
      id: 1,
      name: "Arpan Ghosh",
      year: "2nd Year",
      isStudent: true,
      fsId: "WD2026-2010",
      course: "CSE (AI & ML) ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771227141/qxxewos6rnd5ldqy8hta.jpg",
      position: "Developer",
      linkedinURL:
        "https://www.linkedin.com/in/arpan-2106g05?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: 1,
      name: "Sayan Samantha",
      year: "2nd Year",
      isStudent: true,
      fsId: "WD2026-2011",
      course: "CSE (AI & ML) ",
      imageUrl:
        "https://res.cloudinary.com/dooekcvv0/image/upload/v1771227169/qmwh6lji4d4rbuuiadac.jpg",
      position: "UI/UX Designer",
      linkedinURL:
        "",
    },
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
      <div className="text-center text-white px-6 w-full max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-heading mb-16">
          Web Development Team
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

export default WebDevTeam