import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function MarketingTeam() {
  const coreTeam = [
        {
      fsId: "MK2026-6401",
      name: "Aditya Roy",
      year: "3rd Year",
      course: "ECE",
      isStudent: true,
      position: "Lead",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771424873/e0x5uvdukiu0za77hf8s.jpg",
      linkedinURL: "https://www.instagram.com/fr_yu___aditya__roy?igsh=MTMwMHhlOGRidXZyZA=="
    },
    {
      fsId: "MK2026-6401",
      name: "Ayush Dev",
      year: "3rd Year",
      course: "CSIT",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771232337/d2punfpjzdxjin1vrznk.jpg",
      position: "Co-Lead",
      linkedinURL: "https://www.instagram.com/ayx.shhhh?igsh=c2J4cDF3aDFjcWNt",
    },
    {
      fsId: "MK2026-6403",
      name: "Sambhavi Bhattacharjee",
      year: "1st Year",
      course: "CSE (DATA SCIENCE)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391902/ckxvrxtmnaogvk0tdh4b.jpg",
      linkedinURL: "https://www.instagram.com/ft_sambhavi?igsh=MWVxamNvMTM2aDBxMQ=="
    },
    {
      fsId: "MK2026-6404",
      name: "Soura Sekhar Chakraborty",
      year: "1st Year",
      course: "CSE (DATA SCIENCE)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771393495/b9dkog13dp9fnz22joeg.jpg",
      linkedinURL: "https://www.instagram.com/xx_eclipso_xx?igsh=MXZ2ZHhhem94NGpsZg=="
    },
    {
      fsId: "MK2026-6405",
      name: "Soham Das",
      year: "2nd Year",
      course: "CSE (AI)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771392140/a1ztdepmbmk5zikvncur.jpg",
      linkedinURL: "https://www.instagram.com/ssoham_d?igsh=MXJiYTNybHY5cWk0eA%3D%3D&utm_source=qr"
    },
    {
      fsId: "MK2026-6406",
      name: "Shirsa Rooj",
      year: "2nd Year",
      course: "CSE (AI)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391943/eqnxqvr5fqhqpkwxhck0.png",
      linkedinURL: "https://www.instagram.com/trynfindshirsa___?igsh=MXF5b2Y2MDRzMDhmeQ=="
    },
    {
      fsId: "MK2026-6407",
      name: "Udit Sethia",
      year: "2nd Year",
      course: "CSE (IOT)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771392040/ap9kvtucey9zlq7nwswi.jpg",
      linkedinURL: "https://www.instagram.com/udittsethiaa?igsh=MXUxOXY1eDBwN3poOA=="
    },
    {
      fsId: "MK2026-6408",
      name: "Alisha Shamim",
      year: "1st Year",
      course: "CSE (IOT)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771390998/s9ds4kq2e4ul4ozoejzg.jpg",
      linkedinURL: "https://www.instagram.com/als_364?igsh=YTZuOHBteTFvbWF3"
    },
    {
      fsId: "MK2026-6409",
      name: "Priyanjita Kar",
      year: "2nd Year",
      course: "CSE (AI ML)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771392975/sci66v291ibrppqvpdoc.jpg",
      linkedinURL: "https://www.instagram.com/itzz.pri30?igsh=MWcwZjYwYTZ3OXpseg=="
    },
    {
      fsId: "MK2026-6410",
      name: "Shrestha Sau",
      year: "2nd Year",
      course: "Biotechnology",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391973/vndc7pgdljuxp7wp7buq.jpg",
      linkedinURL: "https://www.instagram.com/the.wild.cat?igsh=MTFnOGdwcXBtNXBrMA%3D%3D&utm_source=qr"
    },
    {
      fsId: "MK2026-6411",
      name: "Sattwik Singha Roy",
      year: "2nd Year",
      course: "CSE (AI)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391923/pryjvovpytsombwgpyal.jpg",
      linkedinURL: "https://www.instagram.com/lifeofsattu?igsh=MXVlbDM1bG9xNDEyNQ=="
    },
    {
      fsId: "MK2026-6412",
      name: "Ankit Parya",
      year: "2nd Year",
      course: "CSE (DATA SCIENCE)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391811/oslr2re2xkkivdfqxw9u.jpg",
      linkedinURL: "https://www.instagram.com/_ankitt_12?utm_source=qr&igsh=ZnM2ZjJxMzRiem8y"
    },
    {
      fsId: "MK2026-6413",
      name: "Shuvam Das",
      year: "3rd Year",
      course: "CSE (IT)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391999/wzouisljxzf05jgcmj2v.jpg",
      linkedinURL: "https://www.instagram.com/shuvam___23?igsh=MTJ4ejZiZ3A3YXNwcQ=="
    },
    {
      fsId: "MK2026-6414",
      name: "Rushati Modak",
      year: "1st Year",
      course: "CSE (AI)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391883/vvhjkar4iq0qnn83xwzn.jpg",
      linkedinURL: "https://www.instagram.com/themodakkid?ig=MTM4ZjQ4NW5qZGthZQ=="
    },
    {
      fsId: "MK2026-6415",
      name: "Aritra Chakraborty",
      year: "2nd Year",
      course: "Biotechnology",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771391834/us9cxqwnjphisjusoipo.jpg",
      linkedinURL: "https://www.instagram.com/blessed_._curse?igsh=MXFvZ3plaDE0YjJ1aA=="
    },
    {
      fsId: "MK2026-6416",
      name: "Ayushmita Roy",
      year: "2nd Year",
      course: "CSE (core)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771423540/xi41etqdzbsb6gmn27if.jpg",
      linkedinURL: "https://www.instagram.com/_ayushmita___?igsh=MXVhN2xwN2Z1NTVyaA=="
    },
    {
      fsId: "MK2026-6417",
      name: "Snigdha Singha",
      year: "2nd Year",
      course: "CSE (AI & ML)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772127742/qdqhecie3ujrqw0rcqjj.jpg",
      linkedinURL: "https://www.instagram.com/yours_mee.mee?igsh=MTFxcjJ4NnR4bXpnNA=="
    },
    {
      fsId: "MK2026-6418",
      name: "Anirban",
      year: "2nd Year",
      course: "CSE (IOT CS BCT)",
      isStudent: true,
      position: "Member",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771390866/vrapohd3nekcaibqrobu.jpg",
      linkedinURL: "https://www.instagram.com/anniiiii_04?utm_source=qr&igsh=enoxMGQ3cHh5amQ2"
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
          Marketing Team
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

export default MarketingTeam