import React from 'react'

function WebDevTeam() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
          url('/wood.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-heading mb-4">
          Web Dev Team
        </h1>
        <p className="font-body opacity-90">Coming Soon…</p>
      </div>
    </div>
  )
}

export default WebDevTeam