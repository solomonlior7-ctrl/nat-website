"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Infrastructure",
  "Low Voltage",
  "Security",
  "Smart Homes",
  "Fuel Management",
];

const PLACEHOLDER_ITEMS = [
  { id: "p1", category: "Infrastructure", title: "Enterprise Network Cabinet", image_url: "" },
  { id: "p2", category: "Infrastructure", title: "Data Centre Cabling", image_url: "" },
  { id: "p3", category: "Low Voltage", title: "PoE Switch Installation", image_url: "" },
  { id: "p4", category: "Low Voltage", title: "Wireless Access Points", image_url: "" },
  { id: "p5", category: "Security", title: "CCTV Control Room", image_url: "" },
  { id: "p6", category: "Security", title: "Access Control System", image_url: "" },
  { id: "p7", category: "Smart Homes", title: "Smart Lighting Scene", image_url: "" },
  { id: "p8", category: "Smart Homes", title: "Home Automation Panel", image_url: "" },
  { id: "p9", category: "Fuel Management", title: "Fleet Fuel Dispensing", image_url: "" },
  { id: "p10", category: "Fuel Management", title: "Tank Monitoring Dashboard", image_url: "" },
  { id: "p11", category: "Infrastructure", title: "Fibre Optic Termination", image_url: "" },
  { id: "p12", category: "Security", title: "IP Camera Network", image_url: "" },
];

const GRADIENT_COLORS = [
  "from-slate-700 to-slate-900",
  "from-blue-800 to-slate-900",
  "from-cyan-800 to-slate-900",
  "from-indigo-800 to-slate-900",
  "from-teal-800 to-slate-900",
  "from-sky-800 to-slate-900",
];

export interface DbGalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  sort_order: number;
}

interface Props {
  items?: DbGalleryItem[];
}

export default function GalleryGrid({ items }: Props) {
  const [active, setActive] = useState("All");

  const source = items && items.length > 0 ? items : PLACEHOLDER_ITEMS;
  const filtered =
    active === "All" ? source : source.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
          >
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${GRADIENT_COLORS[idx % GRADIENT_COLORS.length]} flex items-center justify-center`}
              >
                <svg
                  className="w-16 h-16 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-sm font-semibold">{item.title}</h3>
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
