import TeamMemberCard from '../components/essential/TeamCard';

function LogesticsTeam() {
  const coreTeam = [
        {
      id: 1,
      name: "Niraj Singh",
      year: "4th Year",
      course: "ECE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771230940/zav8qu56db1tin2uz8vt.jpg",
      position: "Lead",
      linkedinURL: "https://www.linkedin.com/in/niraj-singh-8148a6334?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      fsId: "LG2026-5002"
    },
    {
      id: 1,
      name: "Urmila Sinha",
      year: "3rd Year",
      course: "Biotechnology",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771177082/nvxn7799d5njb5vm7bhe.jpg",
      position: "Co-Lead",
      linkedinURL: "https://www.linkedin.com/in/urmila-sinha-245867292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      fsId: "LG2026-5002"
    },
    {
      id: 1,
      name: "Rounak Sutradhar",
      year: "3rd year",
      course: "CST",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771160130/y3gbuklxemzg8hdljs7g.jpg",
      position: "Member",
      linkedinURL: "https://www.linkedin.com/in/rounak-sutradhar-26983028b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      fsId: "LG2026-5003"
    },
    {
      id: 2,
      name: "Punya Agarwal",
      year: "2nd Year",
      course: "Robotics and AI",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771166149/dhnkcgnbvtxogvwcr2fo.jpg",
      position: "Member",
      linkedinURL: "",
      fsId: "LG2026-5004"
    },
    {
      id: 3,
      name: "Joy Chanda",
      year: "2nd Year",
      course: "Robotics and AI",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771175843/ncfmj7xbxtl6azbpprzl.jpg",
      position: "Member",
      linkedinURL: "https://www.linkedin.com/in/joy-chanda-053457335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      fsId: "LG2026-5005"
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
          Logistics Team
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

export default LogesticsTeam