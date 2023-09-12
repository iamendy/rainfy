import Link from "next/link";
import Menu from "./icons/menu";
import User from "./icons/User";
import { useAccount } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected, address } = useAccount();

  return (
    <nav>
      <nav className="flex justify-between w-full p-6 lg:px-24 text-base-100 font-bold border-b border-b-gray ">
        <Link href="/">Rainfy</Link>

        <Menu />
        <div className="hidden lg:flex items-center space-x-9 text-base-100 font-medium leading-[1.6em]">
          {isConnected && <Link href="/dashboard">Dashboard</Link>}

          {openConnectModal && (
            <button
              onClick={openConnectModal}
              className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg"
            >
              Connect wallet
            </button>
          )}

          {openAccountModal && (
            <button
              onClick={openAccountModal}
              className="flex items-center justify-center cursor-pointer"
            >
              {/* @ts-ignore */}
              {address.substring(0, 5)}
              <User />
            </button>
          )}

          {/* {openChainModal && (
            <button
              onClick={openChainModal}
              type="button"
              className="bg-red-500 text-white px-2 py-1"
            >
              Wrong Network
            </button>
          )} */}
        </div>
      </nav>
    </nav>
  );
};
export default Navbar;
