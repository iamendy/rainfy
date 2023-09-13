import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";

const useEuroBalance = (selectedCurrency) => {
  const { address } = useAccount();

  const { data: balance, isLoading } = useContractRead({
    //@ts-ignore
    address: selectedCurrency?.address,
    abi: selectedCurrency?.abi,
    functionName: "balanceOf",
    args: [address],
  });

  return { balance, isLoading };
};

export default useEuroBalance;
