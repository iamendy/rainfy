import { useAccount, useContractRead } from "wagmi";
import Currency from "../types";

const useGetBalance = (currency: Currency) => {
  const { address } = useAccount();

  const { data: balance, isLoading } = useContractRead({
    //@ts-ignore
    address: currency?.address,
    //@ts-ignore
    abi: currency?.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return { balance, isLoading };
};

export default useGetBalance;
