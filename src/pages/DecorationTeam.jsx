function DecorationTeam() {
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
          Decoration Team
        </h1>

        {/* RESPONSIVE + BROWN SCALE IMAGE */}
        <div className="w-full overflow-hidden rounded-2xl group">
          <img
            src="https://res.cloudinary.com/dooekcvv0/image/upload/v1771354929/r85t9r0i1czgrn5ivzdd.jpg"
            alt="Decoration Team"
            className="
              w-full
              h-80 md:h-130 lg:h-137.5
              object-cover
              transition-all duration-700 ease-in-out
              sepia-[0.85] saturate-[0.7] brightness-[0.9]
              group-hover:sepia-0 group-hover:saturate-100 group-hover:brightness-100
            "
          />
        </div>

      </div>
    </div>
  )
}

export default DecorationTeam
