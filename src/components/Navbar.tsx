import Link from "next/link";
import Menu from "./icons/menu";

const Navbar = () => {
  return (
    <nav>
      <nav className="flex justify-between w-full p-6 text-base-100 font-bold border-b border-b-gray ">
        <Link href="/">Rainfy</Link>

        <Menu />
        <div className="hidden lg:flex items-center space-x-9 text-base-100 font-medium leading-[1.6em]">
          <Link href="/dashboard">Dashboard</Link>

          <Link
            href="#"
            className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg"
          >
            Connect wallet
          </Link>
        </div>
      </nav>
    </nav>
  );
};
export default Navbar;
