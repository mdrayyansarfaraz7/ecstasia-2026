
import TeamMemberCard from '../components/essential/TeamCard';
function GraphicsTeam() {
  const coreTeam = [
    {
      id: 1,
      fsId: "GP2026-4600",
      name: "M Kalkita",
      year: "3rd",
      course: "CST",
      isStudent: true,
      position: "Lead",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771170221/ecbhhsdxvybjjekfccee.jpg",
      linkedinURL: "https://www.linkedin.com/in/m-kalkita-45a70a28a"
    },
    {
      id: 2,
      fsId: "GP2026-4601",
      name: "Dibyakanti Laha",
      year: "1st",
      course: "MCA",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771171298/en7adskljbzrfxghc8yc.jpg",
      linkedinURL: "https://www.linkedin.com/in/dibyakanti-laha-2a7051282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      id: 3,
      fsId: "GP2026-4602",
      name: "Debanjan Mondal",
      year: "3rd",
      course: "CSE",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771171651/didjpnlotaq4laeozp2n.png",
      linkedinURL: "https://www.linkedin.com/in/debanjan-mondal8996/"
    },
    {
      id: 4,
      fsId: "GP2026-4603",
      name: "Arkadip Maiti",
      year: "3rd",
      course: "CSE",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771173322/lswqb3s9awhsdnrjkdha.jpg",
      linkedinURL: "https://www.linkedin.com/in/arkadip-maiti-cse"
    },
    {
      id: 5,
      fsId: "GP2026-4604",
      name: "Munshi Jarjis Alam",
      year: "2nd",
      course: "CST",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771174544/hj6huwcvzjiylklmypql.png",
      linkedinURL: ""
    },
    {
      id: 6,
      fsId: "GP2026-4605",
      name: "Baidika Mukherjee",
      year: "1st",
      course: "CSE AI",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771177719/k44zsdd22v62gjqdd010.jpg",
      linkedinURL: "https://www.linkedin.com/in/baidika-mukherjee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 7,
      fsId: "GP2026-4606",
      name: "Subhamita Adhikari",
      year: "2nd",
      course: "CSE",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771237431/q6w14cwesczace9yyd2s.jpg",
      linkedinURL: "https://www.linkedin.com/in/subhamita-adhikari-a14b00273"
    },
    {
      id: 8,
      fsId: "GP2026-4607",
      name: "Chayan Pradhan",
      year: "3rd",
      course: "ECE",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771238645/gvhsqncnzw3bhsn4uiqb.jpg",
      linkedinURL: "https://www.linkedin.com/in/chayan-pradhan-176924286"
    },
    {
      id: 9,
      fsId: "GP2026-4608",
      name: "Orni Bera",
      year: "2nd",
      course: "Robotics and AI",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771169854/ierlhjauqhjsz1un090k.jpg",
      linkedinURL: ""
    },
    {
      id: 10,
      fsId: "GP2026-4609",
      name: "Trinankur Roy",
      year: "2nd",
      course: "CST",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771242559/cvyloflvgi4vygy5rxsu.jpg",
      linkedinURL: "https://www.linkedin.com/in/trinankur-roy-0b790b338/"
    },
        {
      id: 11,
      fsId: "GP2026-4610",
      name: "Aishi Mandal",
      year: "2nd",
      course: "Robotics and AI",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771272157/m0e5xu7fakkylfzhucew.jpg",
      linkedinURL: ""
    },
            {
      id: 12,
      fsId: "GP2026-4612",
      name: "Shirsa Rooj",
      year: "2nd",
      course: "CSE AI",
      isStudent: true,
      position: "Graphic Designer",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772096026/iux35ud2rt5hrceokeya.jpg",
      linkedinURL: " https://www.linkedin.com/in/shirsa-rooj-a847a0371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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