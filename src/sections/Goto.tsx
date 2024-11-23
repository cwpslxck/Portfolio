import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import React from "react";

const things = [
  {
    title: "Photoshop",
    src: "photoshop",
  },
  {
    title: "Front End",
    src: "frontend",
  },
  {
    title: "Video Editing",
    src: "video",
  },
];

function Goto() {
  return (
    <div className="container" id="goto">
      <SectionHeader
        cotitle={"all my projects based on sections"}
        title={"Projects"}
        desc={"choose between sections and navigate my projects."}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {things.map((t) => (
          <Link
            href={`/projects/${t.src}`}
            key={t.title}
            className="from-yellow-400 to-yellow-300 bg-gradient-to-t h-64 w-full p-8 rounded-3xl cursor-pointer"
          >
            <div className="h-full w-full">
              <div className="flex h-full w-full justify-center items-end text-black font2 font-semibold text-4xl">
                {t.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Goto;
