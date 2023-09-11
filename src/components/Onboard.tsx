import Rainy from "../components/Rainy";

const Onboard = () => {
  return (
    <section className="flex items-center flex-col h-full">
      <Rainy />

      <div className="text-center">
        <h3>Save for the rainy day</h3>
        <div>Please connect your Monerium account</div>
        <button className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg mt-4">
          Connect Monerium
        </button>
      </div>
    </section>
  );
};
export default Onboard;
