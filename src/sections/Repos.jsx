"use client";
import SectionHeader from "@/components/SectionHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Arrow from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";

export const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fxtch = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/cwpslxck/repos"
        );
        setRepos(res.data);
      } catch (error) {
        console.error("We have an error: ", error);
      }
    };
    fxtch();
  }, []);
  return (
    <div className="container" id="repos">
      <SectionHeader
        title={"Repos"}
        cotitle={"last github repositories"}
        desc={
          "in this section you can check all og my projects that i uploaded on my github."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((r, index) => (
          <div
            key={index}
            className="bg-zinc-800 w-full flex flex-col items-center justify-between py-6 px-6 rounded-3xl overflow-hidden border-2 border-white/20"
          >
            <div>
              <Image
                className="w-full rounded-xl mb-3"
                width={300}
                height={200}
                loading="lazy"
                alt={`Preview Image of ${r.name} Project`}
                src={`https://raw.githubusercontent.com/cwpslxck/${r.name}/refs/heads/main/Preview.jpg`}
                // src={`https://raw.githubusercontent.com/cwpslxck/TodoList/refs/heads/main/Preview.jpg`}
              />
            </div>
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                <h3 className="font2 font-semibold text-4xl tracking-wider">
                  {r.name}
                </h3>
                <span className="line-clamp-3 font-light text-base py-2 max-w-md text-white/60">
                  {r.description}
                </span>
              </div>
              <div>
                <ul className="flex gap-4">
                  {r.topics.map((topic, index) => (
                    <li
                      className="bg-white/10 px-4 py-1 text-sm font-light tracking-wider uppercase rounded-full"
                      key={index}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <a
                    className="cursor-pointer w-full bg-white mt-3 text-black rounded-lg py-3 px-6 flex justify-center items-center text-base"
                    href={r["html_url"]}
                    target="_blank"
                  >
                    <p>View On GitHub</p>
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
