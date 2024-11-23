import Image from "next/image";
import map from "@/assets/images/map.jpg";
import Stars from "@/assets/icons/sparkle.svg";
import pfp from "@/assets/images/cwpslxck.png";

import web from "@/assets/images/MoviesBooks/WEB.jpg";
import thtaht from "@/assets/images/MoviesBooks/THTAHT.jpg";
import socialnetwork from "@/assets/images/MoviesBooks/SOCIALNETWORK.jpg";
import mrrobot from "@/assets/images/MoviesBooks/MRROBOT.jpg";
import bigshort from "@/assets/images/MoviesBooks/BIGSHORT.jpg";
import wow from "@/assets/images/MoviesBooks/WOWS.jpg";
import silicon from "@/assets/images/MoviesBooks/SILICONVALLEY.jpg";

import SectionHeader from "@/components/SectionHeader";
import { title } from "process";
import ToolboxItems from "@/components/ToolboxItems";

export const AboutSection = () => {
  console.log(map.src);

  const Habbits = [
    {
      title: "Shiraz, Iran (Persia)",
      emoji: "📍",
    },
    {
      title: "19 Years Old",
      emoji: "👶🏻",
    },
    {
      title: "Coffee",
      emoji: "☕",
    },
    {
      title: "Design",
      emoji: "🎨",
    },
    {
      title: "Cooking",
      emoji: "👩🏻‍🍳",
    },
    {
      title: "Game",
      emoji: "🎮",
    },
    {
      title: "Music",
      emoji: "🎸",
    },
    {
      title: "Basketball",
      emoji: "🏀",
    },
  ];
  const books = [
    {
      title:
        "Engineering Software as a Service: An Agile Approach Using Cloud Computering",
      image: web,
    },
    {
      title: "The Hard Thing About Hard Things",
      image: thtaht,
    },
  ];
  const movies = [
    {
      title: "The Social Network",
      image: socialnetwork,
    },
    {
      title: "Mr. Robot Series",
      image: mrrobot,
    },
    {
      title: "The Big Short",
      image: bigshort,
    },
    {
      title: "Wolf Of Wallstreet",
      image: wow,
    },
    {
      title: "Silicon Valley Series",
      image: silicon,
    },
  ];
  return (
    <div className="ltr container" id="about">
      <SectionHeader
        title={"About"}
        cotitle={"everything about me :)"}
        desc={"what do i do when im tired of codding?"}
      />
      <div className="mt-5 space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-zinc-800 w-full md:w-2/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  My Habbits
                </p>
              </div>
              <p className="opacity-70 font-light">who am i and what i do?</p>
            </div>
            <div className="h-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]">
              <div className="flex h-full flex-wrap justify-center items-center gap-4 text-black">
                {Habbits.map((t) => (
                  <div
                    className="px-6 py-2 inline-flex gap-1 bg-gradient-to-br rounded-xl from-yellow-400 to-yellow-500"
                    key={t.title}
                  >
                    <span>{t.title}</span>
                    <span>{t.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-zinc-800 h-80 w-full md:w-96 flex flex-col md:flex-row p-8 rounded-3xl overflow-hidden relative z-0 border-2 border-white/20">
            <div
              className="absolute inset-0 -z-30 bg-center bg-cover opacity-100 flex justify-center items-center"
              style={{
                backgroundImage: `url(${map.src})`,
              }}
            >
              <Image
                src={pfp}
                alt="Pfp"
                loading="lazy"
                className="size-20 bg-slate-300 rounded-full p-1"
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-8">
          {/*  */}
          <div className="bg-zinc-800 w-full md:w-1/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  Books
                </p>
              </div>
              <p className="opacity-70 font-light">
                books that helped me to grow.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex overflow-x-scroll items-end -mb-10 gap-4 px-4">
                {books.map((e) => (
                  <Image
                    key={e.title}
                    className="h-60 w-auto cursor-pointer rounded-xl"
                    alt={e.title}
                    src={e.image}
                    title={e.title}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-zinc-800 w-full md:w-2/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  Movies
                </p>
              </div>
              <p className="opacity-70 font-light">
                movies that made me find my way
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex overflow-x-scroll items-end -mb-10 gap-4 px-4">
                {movies.map((e) => (
                  <Image
                    key={e.title}
                    className="h-60 w-auto cursor-pointer rounded-xl"
                    alt={e.title}
                    src={e.image}
                    title={e.title}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
