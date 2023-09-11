const Join = () => {
  return (
    <section className="pt-12 pb-28 px-6 lg:pt-16 lg:pb-[8rem] lg:px-8 ">
      <div className="relative flex flex-col gap-y-4 text-center md:w-[60%] md:mx-auto">
        <h1 className="text-[28px] leading-[1.2em] font-bold text-base-100 lg:text-[36px]">
          Join the community
        </h1>
        <p className="text-[16px] leading-[1.75em] lg:text-lg">
          Sign up to receive updates and discount
        </p>
        <div className="bg-light px-2 py-1 flex justify-between rounded-md items-center lg:w-[40%] lg:mx-auto">
          <input
            type="text"
            className=" bg-light p-2 focus:outline-none focus-within:outline-none lg:w-[60%]"
            placeholder="youremail@example.com"
          />
          <button className="bg-black text-white px-5 rounded-md py-3 leading-none">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};
export default Join;
