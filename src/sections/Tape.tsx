import Star from "@/assets/icons/star.svg";
const words = ["کیفیت بالا"];

export const TapeSection = () => {
  return (
    <div className="pt-36 pb-12 overflow-x-clip selection:bg-black selection:text-yellow-500">
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 -rotate-2 overflow-x-clip -mx-1">
        <div className="flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-full justify-center py-3 gap-4">
            {words.map((w) => (
              <div className="inline-flex flex-none gap-5 items-center" key={w}>
                <span className="text-black  text-lg font-extrabold">{w}</span>
                <Star className="text-black size-6 rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
