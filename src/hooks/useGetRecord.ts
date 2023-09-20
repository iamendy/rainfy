import { useAccount, useContractRead } from "wagmi";
import connect from "../constants/connect";
import Currency from "../types";

const useGetRecord = (currency: Currency) => {
  const { address } = useAccount();

  const { data: record, isLoading } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "getRecord",
    args: [address, currency?.symbol],
    watch: true,
  });

  return { record, isLoading };
};

export default useGetRecord;
