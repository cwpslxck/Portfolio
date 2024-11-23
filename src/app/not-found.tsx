import pishi from "@/assets/images/pishi.gif";
import { Header } from "@/sections/Header";
import Image from "next/image";
import Link from "next/link";
import loop from "@/assets/images/loop.gif";
import Arrow from "@/assets/icons/arrow-up-right.svg";

function Notfound() {
  const notfound = "We're Lost :(";
  return (
    <div className="w-full h-screen">
      <Header />
      <div
        className="h-screen w-full absolute bg-cover blur-lg"
        style={{
          backgroundImage: `url(${loop.src})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      <div className="h-full w-full flex flex-col gap-1 justify-center items-center">
        <Image
          loading="lazy"
          className="h-52 w-auto rounded-2xl"
          alt="Not Found Gif"
          src={pishi}
        />
        <p className="font-bold text-5xl font2">{notfound}</p>
        <Link className="flex items-center" href={"/"}>
          <p className="text-white/80 font-normal">Home Page</p>
          <Arrow className="text-white/80 size-6" />
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
