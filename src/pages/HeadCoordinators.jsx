import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard'

function HeadCoordinators() {
  const coreTeam =
    [

      {
        id: 1,
        name: "Amitabh Daripa",
        year: "4th Year",
        course: " CSE (IOT CS BT)",
        isStudent: true,
        imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771833726/kmeu6wxydniywpyp8moa.jpg",
        position: "Gymkhana Convenor",
        linkedinURL: "",
        fsId: "GK2026-5001"
      },
      {
        id: 2,
        name: "Adrija Mukherjee",
        year: "4th Year",
        course: " CSE",
        isStudent: true,
        imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771833495/ecwzi4adhzscr3fjcxb8.jpg",
        position: "ICC President",
        linkedinURL: "",
        fsId: "GK2026-5002"
      },
      {
        id: 3,
        name: "Ankush Dutta",
        year: "4th Year",
        course: " CSE (AI & ML)",
        isStudent: true,
        imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771834035/oa8fvyocqnctinwdmpco.jpg",
        position: "technical secretary",
        linkedinURL: "",
        fsId: "GK2026-5003"
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
          Gymkhana
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
  )
}

export default HeadCoordinators