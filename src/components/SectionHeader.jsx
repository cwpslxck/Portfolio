export default function SectionHeader({ title, cotitle, desc }) {
  return (
    <div className="flex flex-col items-center mb-14 pt-24">
      <div className="flex justify-center">
        <p className="font-light py-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-transparent bg-clip-text">
          {cotitle}
        </p>
      </div>
      <p className="font2 font-semibold text-6xl tracking-wider flex">
        {title}
      </p>
      <p className="font3 py-2 max-w-md text-lg text-center text-white/70">
        {desc}
      </p>
    </div>
  );
}
