const SaveBox = () => {
  return (
    <aside className="lg:w-[30%] p-4">
      <h3 className="font-semibold">Start your Savings Journey</h3>
      <form action="#" method="POST" className="mt-4">
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Amount
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="50"
              ></input>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Duration
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Days"
              ></input>
            </div>
          </div>
          <div className="flex gap-x-5">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-yellow px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80"
            >
              Approve
            </button>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-black/30 px-3.5 py-2.5 font-semibold leading-7 text-white "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </aside>
  );
};
export default SaveBox;
