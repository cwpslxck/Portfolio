import Arrow from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import pishi from "@/assets/images/pishi.gif";
import loop from "@/assets/images/loop.gif";

const socials = [
  {
    title: "X",
    link: "https://x.com/cwpslxck",
  },
  {
    title: "Youtube",
    link: "https://youtube.com/@cwpslxck",
  },
  {
    title: "Telegram",
    link: "https://cwpslxck.t.me",
  },
];

export const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="py-8 mt-10 z-0 flex justify-between flex-col md:flex-row">
          <div
            id="links"
            className="gap-9 flex flex-col md:flex-row items-center justify-center text-sm"
          >
            {socials.map((s) => (
              <a
                target="_blank"
                key={s.link}
                className="inline-flex items-center justify-center tracking-wider"
                href={s.link}
              >
                <span>{s.title}</span>
                <Arrow className="size-5" />
              </a>
            ))}
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div
              title="this pishi is taking a nap, dont bother him :("
              className="size-24 bg-center bg-contain cursor-grab"
              style={{
                backgroundImage: `url(${pishi.src})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="relative w-full -z-10">
        <div className="w-full absolute h-[600px] bottom-0">
          <div
            style={{
              backgroundImage: `url(${loop.src})`,
            }}
            className="w-full h-full bg-cover blur-lg"
          >
            <div className="h-full w-full bg-gradient-to-b from-black to-black/60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
