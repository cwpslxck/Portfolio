import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div
      id="collab"
      className="container pt-16 selection:bg-black selection:text-yellow-400"
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl w-full py-6 px-4 text-black flex flex-col items-center gap-4">
        <div>
          <h4 className="font2 text-4xl text-center font-extrabold tracking-widest">
            READY FOR COLLAB!
          </h4>
          <p className="text-center font-normal max-w-md opacity-70">
            im intrested to talk about your projects any time.
          </p>
        </div>
        <div>
          <a href="https://cwpslxck.t.me">
            <p className="bg-black px-6 py-2 rounded-xl text-yellow-300 flex">
              <span>My Telegram</span>
              <ArrowUpRight />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
