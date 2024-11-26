import cwpslxck from "@/assets/images/cwpslxck.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_60%,black_70%,transparent)]">
        <div className="flex items-center justify-center h-full w-full">
          <div className="size-[400px] hero-ring"></div>
          <div className="size-[600px] hero-ring"></div>
          <div className="size-[800px] hero-ring"></div>
          <div className="size-[1000px] hero-ring"></div>
        </div>
      </div>

      <div className="container flex flex-col items-center pt-36 md:pt-48">
        <div className="z-0 flex flex-col items-center">
          <Image
            src={cwpslxck}
            className="size-36"
            alt="A person behind the laptop"
            loading="lazy"
          />
          <div className="bg-yellow-950 z-0 border border-yellow-900 rounded-lg px-4 py-1.5 flex items-center gap-3">
            <div className="bg-yellow-500 size-2.5 rounded-full"></div>
            <div className="text-base font-normal tracking-wide">
              ready for new projects
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-w-lg mx-auto">
            <h1 className="font2 text-5xl md:text-6xl font-black text-center my-5">
              Front End Developer
            </h1>
            <p className="text-center text-lg font3">
              with use of best technologies and libraries, i can build your
              projects in best way.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-8 gap-4 text-lg">
          <button className="flex z-40 justify-center items-center gap-1 border border-yellow-500/40 px-5 py-2 rounded-xl">
            <ArrowDown className="size-5" />
            <a
              target="_blank"
              about="Download CV Resume File"
              href="/resume.pdf"
            >
              Download CV File
            </a>
          </button>
          <button className="flex z-40 justify-center gap-1 px-5 py-2 rounded-xl bg-yellow-50 text-black hover:bg-white transition-colors">
            <a href="#collab">
              <span>Collab With Me</span>
            </a>
            <span>👋</span>
          </button>
        </div>
      </div>
    </div>
  );
};
