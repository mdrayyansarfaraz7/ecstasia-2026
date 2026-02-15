"use client";
import { useState } from "react";

function EventCategory() {
  const categories = [
    {
      name: "Drama",
      events: [
        {
          id: 1,
          title: "GENZIFY",
          day: "Day 1",
          time: "2:00 PM",
          venue: "Main Auditorium",
          type: "Team",
          teamSize: "4–8",
          fees: 0,
          poster: "#",
          desc: "A Gen-Z detective comedy drama packed with mystery, humor and theatrical twists presented as a competitive stage performance.",
          regLink: "#",
          coordinators: [
            { name: "Subhamoy", phone: "7890195129" },
            { name: "Nilanjan", phone: "8800214133" },
          ],
        },
                {
          id: 1,
          title: "GENZIFY",
          day: "Day 1",
          time: "2:00 PM",
          venue: "Main Auditorium",
          type: "Team",
          teamSize: "4–8",
          fees: '250-Solo ',
          poster: "#",
          desc: "A Gen-Z detective comedy drama packed with mystery, humor and theatrical twists presented as a competitive stage performance.",
          regLink: "#",
          coordinators: [
            { name: "Subhamoy", phone: "7890195129" },
            { name: "Nilanjan", phone: "8800214133" },
          ],
        },
      ],
    },
    { name: "Art", events: [] },
    { name: "Sports", events: [] },
    { name: "Photography", events: [] },
    { name: "App Creation", events: [] },
    { name: "Business", events: [] },
    { name: "Dance", events: [] },
    { name: "Music", events: [] },
    { name: "Literary", events: [] },
    { name: "Informals", events: [] },
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="
      min-h-screen
      bg-linear-to-br from-[#f4e9d8] via-[#ead7b5] to-[#d9c29e]
      shadow-[0_0_0_2px_rgba(74,55,40,0.45)]
      text-[#2b1d0e]
      px-6 md:px-12 py-6
    ">
      <div className="max-w-5xl mx-auto">

        {/* ===== HEADER ===== */}

        <div className="flex justify-between items-center border-b border-[#4a3728] pb-2">
          <span className="font-body text-xs uppercase tracking-[0.35em]">
            Official Fest Chronicle
          </span>

          <img
            src="/ecstasia.png"
            alt="Ecstasia"
            className="h-14 sepia contrast-150 brightness-90"
          />

          <span className="font-body text-xs uppercase tracking-[0.35em]">
            Est. Tradition
          </span>
        </div>

        <div className="text-center py-6 border-b-4 border-double border-[#4a3728]">
          <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-[0.08em]">
            Exciting Events
          </h1>

          <p className="font-body mt-3 italic uppercase tracking-[0.35em] text-sm">
            Ecstasia • UEM Kolkata • 2026 Edition
          </p>
        </div>

        {/* ===== DROPDOWN ===== */}

        <div className="mt-6 mb-8">
          <label className="block font-heading text-sm uppercase mb-2">
            Select Section
          </label>

          <select
            value={selected.name}
            onChange={(e) =>
              setSelected(categories.find(c => c.name === e.target.value))
            }
            className="
              w-72
              bg-[#f7ecd6]
              border border-[#4a3728]
              px-4 py-3
              font-body text-sm uppercase
            "
          >
            {categories.map(cat => (
              <option key={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* ===== ARTICLES ===== */}

        <div className="space-y-10">

          {selected.events.map(event => (

            <article
              key={event.id}
              className="
                bg-[#f7ecd6]
                border border-[#5a4330]
                shadow-[0_0_0_1px_rgba(90,67,48,0.35)]
                p-6
                flex flex-col md:flex-row
                gap-6
              "
            >

              {/* LEFT — ARTICLE TEXT */}
              <div className="flex-1">

                <h2 className="font-heading text-3xl uppercase mb-2">
                  {event.title}
                </h2>

                <div className="font-body text-xs italic mb-3 border-b border-dashed border-[#6a5238] pb-2">
                  {event.day} • {event.time} • {event.venue}
                </div>

                <p className="font-body text-sm leading-relaxed mb-4">
                  {event.desc}
                </p>

                <div className="
                  font-body text-sm
                  border-y border-dashed border-[#6a5238]
                  py-3 mb-4
                  bg-[#efe2c8]/60
                  px-3 space-y-1
                ">
                  <div><b>Event Type:</b> {event.type}</div>

                  {event.type === "Team" && (
                    <div><b>Team Size:</b> {event.teamSize}</div>
                  )}

                  <div>
                    <b>Registration:</b>{" "}
                    {event.fees === 0 ? "FREE ENTRY" : `₹${event.fees}`}
                  </div>
                </div>

                <div className="font-body text-sm mb-4">
                  <div className="font-heading text-sm uppercase mb-2">
                    Event Coordinators
                  </div>

                  {event.coordinators.map((c, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-dotted">
                      <span>{c.name}</span>
                      <span>{c.phone}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-8">
                  <button className="font-heading text-xs uppercase border-b border-black">
                    View Rules
                  </button>

                  <a className="font-heading text-xs uppercase border px-5 py-2 border-[#4a3728] hover:bg-[#4a3728] hover:text-[#f4e9d8]">
                    Register
                  </a>
                </div>

              </div>

              {/* RIGHT — POSTER */}
              <div className="w-full md:w-72 shrink-0 border border-[#4a3728]">
                <img
                  src='/pos.jpeg'
                  alt={event.title}
                  className="w-full h-auto sepia contrast-125 brightness-95"
                />
              </div>

            </article>

          ))}

        </div>

      </div>
    </div>
  );
}

export default EventCategory;
