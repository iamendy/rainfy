import { ethers } from "ethers";
import useGetBalance from "../hooks/useGetBalance";
import useGetRecord from "../hooks/useGetRecord";
import { useCountdown } from "../hooks/useCountdown";

const SavingsCard = ({ currency }) => {
  const { balance } = useGetBalance(currency);
  const { record } = useGetRecord(currency);
  const { days, hours, minutes, seconds, isCountdownCompleted } = useCountdown(
    parseInt(record?.expiresAt)
  );

  return (
    <div className="shadow-md bg-light w-[30%] rounded-md p-3">
      <h3 className="mb-2 font-semibold">{currency?.name}</h3>
      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-sm">Locked</span>
          <span className="text-xl font-bold">
            {currency?.sign}
            {Math.floor(ethers?.formatEther(record?.balance || "0") * 100) /
              100}
          </span>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-sm">Bal</span>
          <span className="text-xl font-bold">
            {currency?.sign}
            {Math.floor(ethers.formatEther(balance || "0") * 100) / 100}
          </span>
        </div>
      </div>

      {record?.status > 0 && (
        <>
          <div className="line w-[60%] mx-auto h-[1px]" />

          <div className="flex justify-between items-center mt-2">
            <div className="font-monospace">
              {isCountdownCompleted ? (
                <p>Completed!</p>
              ) : (
                <>
                  <p className="text-xs">Locked until</p>
                  <p>
                    {days}:{hours}:{minutes}:{seconds}
                  </p>
                </>
              )}
            </div>

            <button
              className={`${
                isCountdownCompleted
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-400 hover:bg-red-500"
              } py-1 px-2  text-white rounded`}
            >
              Break Piggy
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default SavingsCard;
