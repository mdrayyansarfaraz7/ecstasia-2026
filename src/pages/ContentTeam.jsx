import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function ContentTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Meghamitra Banerjee",
      year: "3rd Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771225627/jwarakclqgwzhugpfb0l.jpg",
      position: "Lead",
      linkedinURL: "https://www.instagram.com/_megha_1920_?igsh=MW80dHQ4bjJwcHlyZg==",
      fsId: "CT2026-4001"
    },
    {
      id: 1,
      name: "Urmila Sinha",
      year: "3rd Year",
      course: "Biotechnology",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771177082/nvxn7799d5njb5vm7bhe.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.linkedin.com/in/urmila-sinha-245867292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      fsId: "CT2026-4002"
    },
    {
      id: 2,
      name: "Nilanjan Saha",
      year: "3rd Year",
      course: "CSE (AI & ML)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153935/ym5ozunwouxs32yyqkng.jpg",
      position: "Content Writer",
      linkedinURL: "https://nilanjan-saha-portfolio.vercel.app/",
      fsId: "CT2026-4000"
    },
    {
      id: 2,
      name: "Ishika Mandal",
      year: "3rd Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771233057/lllff9iduz0ulvaq7dqx.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.linkedin.com/in/ishikamandal",
      fsId: "CT2026-4002"
    },
    {
      id: 3,
      name: "Madhura Bhattacharyya",
      year: "2nd Year",
      course: "ECE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771164114/gpn7igopuwocvd4uid6d.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.instagram.com/_madhura_bhattacharyya_?igsh=amd6cndldHVrZ2du",
      fsId: "CT2026-4003"
    },
    {
      id: 4,
      name: "Sampriti Ghosh",
      year: "2nd Year",
      course: "CSE(AI&ML)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771169672/hb3dnprfrgwd4i5heajm.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.instagram.com/sampriti.iiii?igsh=amJzMDV6Z25tZjB6",
      fsId: "CT2026-4004"
    },
    {
      id: 5,
      name: "ARIJIT PAL",
      year: "2ND Year",
      course: "CSE ( DATA SCIENCE)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771162257/poebvkcuk3nbpzgn9jbb.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.instagram.com/a.p_icman_?igsh=cnVwZjRhc2lseDFp",
      fsId: "CT2026-4005"
    },
    {
      id: 6,
      name: "Sristi Lahiri",
      year: "2nd Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771255763/y1cgooiaw42x83huf78f.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.linkedin.com/in/sristi-lahiri-ab36a42b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      fsId: "CT2026-4006"
    },
    {
      id: 7,
      name: "Prisha Roy Chaudhuri",
      year: "2nd Year",
      course: "CSE IOT",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771167979/u40zowwxhlfxxjcafn2a.jpg",
      position: "Content Writer",
      linkedinURL: "https://www.linkedin.com/in/prisha-roy-chaudhuri-647bb7317",
      fsId: "CT2026-4007"
    }
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
          Conetent Team
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

export default ContentTeam