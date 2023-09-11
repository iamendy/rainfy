import Onboard from "../components/Onboard";
import PiggieBank from "../components/PiggieBank";

import { useState } from "react";

const Dashboard = () => {
  const [isOnboard, setIsOnboard] = useState(false);

  return (
    <div className="p-6 h-full">{isOnboard ? <Onboard /> : <PiggieBank />}</div>
  );
};

export default Dashboard;
