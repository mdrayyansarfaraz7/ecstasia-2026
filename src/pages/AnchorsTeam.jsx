import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function AnchorsTeam() {
    const coreTeam = [
                {
            id: 1,
            name: "Ayush Dev",
            year: "3rd Year",
            course: "CSIT",
            isStudent: true,
            imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771232337/d2punfpjzdxjin1vrznk.jpg",
            position: "Lead",
            linkedinURL: "https://www.instagram.com/ayx.shhhh?igsh=c2J4cDF3aDFjcWNt",
            fsId: "AC2026-7001"
        },
        {
            id: 1,
            name: "Sakshi Shandilya",
            year: "1st Year",
            course: "CSE (IOT, BCT, CS)",
            isStudent: true,
            imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771228488/ooru6fw5ppca4xlfyrgq.jpg",
            position: "Anchor",
            linkedinURL: "https://www.instagram.com/shandilyasakshi__/?utm_source=ig_web_button_share_sheet",
            fsId: "AC2026-7002"
        },
        {
            id: 2,
            name: "Priyanjita Kar",
            year: "2nd Year",
            course: "CSE AI ML",
            isStudent: true,
            imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771228520/htf2rnwqqhfuxtbg20jv.jpg",
            position: "Anchor",
            linkedinURL: "https://www.instagram.com/itzz.pri30?igsh=dWRjNGNwMXRqb2Nt",
            fsId: "AC2026-7003"
        },
        {
            id: 3,
            name: "Roshan Yadav",
            year: "2nd Year",
            course: "CSE (IOT, CS, BT)",
            isStudent: true,
            imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771228552/rwtefngqdfjgi33qqvcc.jpg",
            position: "Anchor",
            linkedinURL: "https://www.instagram.com/heres_roshan?igsh=MXZiMnhreGhjNnE4ZQ==",
            fsId: "AC2026-7004"
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
                    Anchors
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

export default AnchorsTeam