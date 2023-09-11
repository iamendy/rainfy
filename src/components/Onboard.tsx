import Rainy from "../components/Rainy";

const Onboard = () => {
  return (
    <div className="p-6 h-full ">
      <div className="flex items-center justify-center flex-col">
        <Rainy />
        <h3>Save for the rainy day</h3>
        <div>Please connect your Monerium account</div>
        <button className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg mt-4">
          Connect Monerium
        </button>
      </div>
    </div>
  );
};
export default Onboard;
