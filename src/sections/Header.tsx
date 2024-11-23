import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex w-full justify-center items-center fixed z-40 top-3">
      <ul className="flex gap-1 p-0.5 border-white/20 rounded-full border bg-white/20 backdrop-blur">
        <li className="header-item text-yellow-50/80 hover:text-yellow-50 hover:bg-yellow-50/20">
          <Link href="">Home</Link>
        </li>
        <li className="header-item text-yellow-50/80 hover:text-yellow-50 hover:bg-yellow-50/20">
          <Link href="/#repos">Projects</Link>
        </li>
        <li className="header-item text-yellow-50/80 hover:text-yellow-50 hover:bg-yellow-50/20">
          <Link href="/#about">About</Link>
        </li>
        <li className="header-item bg-yellow-50 text-black hover:bg-white/70">
          <Link href="/#collab">Collab</Link>
        </li>
      </ul>
    </div>
  );
};
