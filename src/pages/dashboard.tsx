import Onboard from "../components/Onboard";
import PiggieBank from "../components/PiggieBank";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Loader from "../components/icons/Loader";

const Dashboard = () => {
  const [isOnboard, setIsOnboard] = useState(true);
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    const { data } = await axios.get(`/api/auth?address=${address}`);
    setIsLoading(false);
    //resolves which screen to display
    data?.isUser ? setIsOnboard(false) : setIsOnboard(true);
  };

  useEffect(() => {
    checkAuth();
  }, [address]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-6 h-full">{isOnboard ? <Onboard /> : <PiggieBank />}</div>
  );
};

export default Dashboard;
