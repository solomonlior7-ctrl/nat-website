"use client";

import { useState } from "react";

const categories = ["All", "Infrastructure", "Low Voltage", "Security", "Smart Homes", "Fuel Management"];

const galleryItems = [
  { id: 1, category: "Infrastructure", title: "Enterprise Network Cabinet", description: "Structured cabling and server rack installation" },
  { id: 2, category: "Infrastructure", title: "Data Centre Cabling", description: "Organised Cat6A cabling infrastructure" },
  { id: 3, category: "Low Voltage", title: "PoE Switch Installation", description: "Power over Ethernet distribution system" },
  { id: 4, category: "Low Voltage", title: "Wireless Access Points", description: "PoE-powered Wi-Fi coverage deployment" },
  { id: 5, category: "Security", title: "CCTV Control Room", description: "Centralised video surveillance monitoring" },
  { id: 6, category: "Security", title: "Access Control System", description: "Multi-door access control with biometrics" },
  { id: 7, category: "Smart Homes", title: "Smart Lighting Scene", description: "Automated lighting control and ambience" },
  { id: 8, category: "Smart Homes", title: "Home Automation Panel", description: "Central smart home control interface" },
  { id: 9, category: "Fuel Management", title: "Fleet Fuel Dispensing", description: "RFID-authorised fuel dispenser system" },
  { id: 10, category: "Fuel Management", title: "Tank Monitoring Dashboard", description: "Real-time fuel level monitoring display" },
  { id: 11, category: "Infrastructure", title: "Fibre Optic Termination", description: "High-speed fibre connectivity solution" },
  { id: 12, category: "Security", title: "IP Camera Network", description: "High-definition IP camera deployment" },
];

const colors = [
  "from-slate-700 to-slate-900",
  "from-blue-800 to-slate-900",
  "from-cyan-800 to-slate-900",
  "from-indigo-800 to-slate-900",
  "from-teal-800 to-slate-900",
  "from-sky-800 to-slate-900",
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-accent text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${colors[item.id % colors.length]} flex items-center justify-center`}
            >
              <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-sm font-semibold">{item.title}</h3>
              <p className="text-slate-300 text-xs mt-0.5">{item.description}</p>
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
