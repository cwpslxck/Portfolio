import CheckboxImage from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Seprator from "@/assets/icons/star.svg";

import vf from "@/assets/images/vlonefarsibanner.png";
import tx from "@/assets/images/trxofabanner.png";

const portfolioProjects = [
  {
    company: "Vlonefarsi",
    year: "2024",
    title: "Print On Demond Dropshiping",
    results: [
      { title: "More Than 100 Sales on First Month" },
      { title: "Traget Audience is Iranain People Between 17 - 25" },
      { title: "More Than 5 Reels With More Than 50K Views" },
    ],
    link: "https://vlonefarsi.ir",
    image: vf,
  },
  {
    company: "Trapfa",
    year: "2023",
    title: "Online Magazine About Music",
    results: [
      { title: "More Than 6 Months Activity on Telegram" },
      { title: "Many Viral Reels on Instagram" },
      { title: "Lunching Website os on Progress" },
    ],
    link: "https://trxpfa.t.me",
    image: tx,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="container" id="projects">
      <SectionHeader
        title={"Projects"}
        cotitle={"i managed these projects"}
        desc={
          "in this section you can watch and read about all projects that i build and manage."
        }
      />
      <div className="grid grid-cols-1 gap-8">
        {portfolioProjects.map((project) => (
          <div
            key={project.link}
            className="bg-zinc-800 w-full flex gap-0 md:gap-3 lg:gap-0 items-center justify-between flex-col-reverse lg:flex-row px-6 md:px-12 lg:px-16 py-6 md:py-10 rounded-3xl overflow-hidden border-2 border-white/20"
          >
            <div className="lg:px-12 w-full lg:w-1/2">
              <div className="flex justify-start gap-1 items-center tracking-widest mb-1 md:mb-3 text-yellow-400">
                <p>{project.company}</p>
                <Seprator className="size-6 mb-1" />
                <p>{project.year}</p>
              </div>
              <h3 className="font2 font-semibold text-start tracking-wide text-4xl md:max-w-md">
                {project.title}
              </h3>
              <ul className="flex flex-col">
                {project.results.map((result) => (
                  <li
                    className="inline-flex items-center gap-1 text-sm py-2 text-white/60"
                    key={result.title}
                  >
                    <CheckboxImage className="size-5" />
                    <span className="font3 line-clamp-1">{result.title}</span>
                  </li>
                ))}
              </ul>
              <a
                className="cursor-pointer bg-white mt-3 text-black rounded-lg py-3 px-6 flex justify-center items-center text-base w-full md:w-fit"
                href={project.link}
              >
                <p>Preview</p>
                <ArrowUpRight />
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center pb-3 md:pb-0">
              <Image
                className="w-full lg:w-3/4 md:w-full"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
