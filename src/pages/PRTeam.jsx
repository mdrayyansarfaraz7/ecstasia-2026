import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function PRTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Bedika Dubey",
      year: "4th Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771228351/wcsfq7fnkdz34piouujy.jpg",
      position: "PR Lead",
      linkedinURL: "https://www.instagram.com/bedika_dubey?igsh=MTlvYXo5MTR0Zm1mZQ=="
    },

    {
      id: 2,
      name: "Nilanjan Saha",
      year: "3rd Year",
      course: "CSE (AI & ML)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153935/ym5ozunwouxs32yyqkng.jpg",
      position: "Member",
      linkedinURL: "https://nilanjan-saha-portfolio.vercel.app/"
    },

    {
      id: 3,
      name: "Udit Sethia",
      year: "2nd Year",
      course: "CSE (IOT)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771164410/dwwtrk13fbtrdicvyfzf.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/udittsethiaa?igsh=MXUxOXY1eDBwN3poOA=="
    },
    {
      id: 4,
      name: "Priyanshu Mitra",
      year: "2nd Year",
      isStudent: true,
      course: "CSE (AI & ML)",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153709/wtjzb8r7oq51lhpwasu9.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/priyanshumitrapm?igsh=MWt2dGlxOHl1eDN0Yw=="
    },
    {
      id: 5,
      name: "Sattwik Singha Roy",
      year: "2nd Year",
      course: "CSE (AI)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771228505/alw5dvui7gho1ddvneeg.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/lifeofsattu?igsh=MXVlbDM1bG9xNDEyNQ=="
    },
    {
      id: 6,
      name: "Sayani Roy",
      year: "2nd Year",
      course: "Biotech",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771165084/jivyyxc1uyetnolvpdlt.jpg",
      position: "Member",
      linkedinURL: "https://www.linkedin.com/in/sayani-roy-5bb948392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      id: 7,
      name: "Aniket Saha",
      year: "2nd Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153491/cbvv4qe38mltvhgryqny.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/aniket_xff?igsh=ZTVuMnYyNHhzM3Zq"
    },
    {
      id: 8,
      name: "Priyanjita Kar",
      year: "2nd Year",
      course: "CSE AI ML",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771164988/td0fvd58pzna0xexlfhk.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/itzz.pri30?igsh=MWcwZjYwYTZ3OXpseg=="
    },
    {
      id: 9,
      name: "Shrestha Sau",
      year: "2nd Year",
      isStudent: true,
      course: "Biotechnology",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771164618/fabnnjcubntooigcttp9.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/the.wild.cat?igsh=MTFnOGdwcXBtNXBrMA%3D%3D&utm_source=qr"
    },
    {
      id: 10,
      name: "Orni Bera",
      year: "2nd Year",
      course: "Robotics and AI",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771169854/ierlhjauqhjsz1un090k.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/akissimp?igsh=Z2duZjBlOXNtZmQw"
    },
    {
      id: 11,
      name: "Arpayan Chakraborty",
      year: "2nd Year",
      course: "Robotics & AI",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771176657/aa6ff6usyt06rrueyq9t.jpg",
      position: "PR & Social Media",
      linkedinURL: "https://www.instagram.com/_arpxyxn_?igsh=MWloMmNiYTVvcmdrdg%3D%3D&utm_source=qr"
    },

    {
      id: 12,
      name: "Prajukta Brahma",
      year: "1st Year",
      isStudent: true,
      course: "CSE (AI)",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771165638/pjg5uecdrbie39hcwcgo.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/juckxx.ishh?igsh=a3ZmMndiaHp5azhh"
    },
    {
      id: 13,
      name: "Harsit Kedia",
      year: "1st Year",
      isStudent: true,
      course: "CSE (IOT, BCT, CS)",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153677/pgc7h8yirha9lx1pvgbs.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/kedvn_?igsh=MWZkMnV3Ym9vdnEwcw=="
    },
    {
      id: 14,
      name: "Aritra Saha",
      year: "1st Year",
      isStudent: true,
      course: "CSE (AI)",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771164569/oxd0hbjmzem9jiaz2jos.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/aritrabolchi?igsh=a2ZhcDdnNjBsdnk4"
    },
    {
      id: 15,
      name: "Aditya Sarkar",
      year: "1st Year",
      course: "CSE (AI)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771153861/njj070pfegdafgsnpwtb.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/_.thatboredguy._?igsh=MTh5djVudTh5dnZ6Yg=="
    },
    {
      id: 16,
      name: "Ridhima Prasad",
      year: "1st Year",
      course: "CSE (AI)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772443886/iausbxwspim8mame3kmn.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/ridhhii_.15?igsh=MnRsZHhienhhcGMy"
    },
    {
      id: 17,
      name: "Aman Paramanik",
      year: "1st Year",
      course: "CSE (IOT)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771165493/xzt8qmkrp5mw2hgxsjdx.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/zoro2_424?igsh=Z2lldHIya2M1aWE1"
    }
  ];


  return (
    <div
      className="h-screen w-full overflow-y-auto py-16"
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
          PR & Social Media Team
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

export default PRTeam