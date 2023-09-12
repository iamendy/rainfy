const UpdatePiggy = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <label htmlFor="" className="text-base font-medium text-gray-900">
          Update Amount
        </label>
        <div className="mt-2">
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="50"
          ></input>
        </div>
      </div>

      <div className="flex gap-x-5">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md bg-yellow hover:bg-yellow/90 px-3.5 py-2.5 font-semibold leading-7 "
        >
          Approve
        </button>

        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-md bg-black/10 px-3.5 py-2.5 font-semibold leading-7 text-white "
        >
          Update
        </button>
      </div>
    </div>
  );
};
export default UpdatePiggy;
