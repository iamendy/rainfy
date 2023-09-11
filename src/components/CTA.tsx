import Image from "next/image";
import planning from "../../public/img/planning.webp";
import Lines from "./icons/Lines";

const CTA = () => {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8">
      <div
        className="bg-light p-4 rounded-[16px] flex flex-col space-y-5 
        md:w-[50%] md:mx-auto lg:flex-row lg:items-center lg:w-[70%] lg:p-16 xl:w-[50%] xl:max-w-[1080px] xl:mx-auto"
      >
        <div className="lg:order-1 lg:flex-1">
          <div className="relative w-[80%] ">
            <Lines />
            <Image src={planning} alt="Planning meals" />
          </div>
        </div>

        <div className="p-4 flex flex-col gap-y-4 lg:flex-1">
          <h3 className="text-[28px] font-bold leading-[1.2em] text-base-100 lg:text-4xl lg:leading-[1.2em] lg:w-[90%]">
            The ultimate meal planner
          </h3>

          <p className="text-base-50 text-[18px] leading-[1.75em] lg:w-[80%] ">
            Supercharge your health and take control of your diet now!
          </p>
          <button className="bg-yellow w-fit font-bold text-base-100 px-5 py-2 rounded-lg lg:px-9">
            {" "}
            Get started →
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTA;
