import Fire from "./icons/Fire";

const PiggieBank = () => {
  const people = [
    {
      name: "1",

      department: "$200",

      role: "13th Jan 2023",
    },
    {
      name: "2",

      department: "$200",

      role: "13th Jan 2023",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-x-8 max-w-[90rem] mx-auto h-full">
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
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
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
      <main className="lg:w-[70%] h-full p-4">
        <div className="flex justify-between mb-6">
          <h3>Welcome Nnamdi,</h3>
          <div className="flex">
            <Fire /> 30 RTK
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="shadow-md bg-light w-[30%] rounded-md p-3">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Locked</span>
                <span className="text-xl font-bold">$300</span>
              </div>

              <div className="flex flex-col text-right">
                <span className="text-sm">Bal</span>
                <span className="text-xl font-bold">$50</span>
              </div>
            </div>

            <div className="font-monospace text-center mt-2">05: 24: 05</div>

            <div className="flex items-center justify-center mt-5">
              <button className="py-1 px-2 bg-red-500 text-white rounded">
                Break Piggy
              </button>
            </div>
          </div>

          <div className="shadow-md bg-light w-[30%] rounded-md p-3">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Locked</span>
                <span className="text-xl font-bold">$300</span>
              </div>

              <div className="flex flex-col text-right">
                <span className="text-sm">Bal</span>
                <span className="text-xl font-bold">$50</span>
              </div>
            </div>

            <div className="font-monospace text-center mt-2">05: 24: 05</div>

            <div className="flex items-center justify-center mt-5">
              <button className="py-1 px-2 bg-yellow shadow-sm text-black rounded">
                Break Piggy
              </button>
            </div>
          </div>

          <div className="shadow-md bg-light w-[30%] rounded-md p-3">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Locked</span>
                <span className="text-xl font-bold">$300</span>
              </div>

              <div className="flex flex-col text-right">
                <span className="text-sm">Bal</span>
                <span className="text-xl font-bold">$50</span>
              </div>
            </div>

            <div className="font-monospace text-center mt-2">05: 24: 05</div>

            <div className="flex items-center justify-center mt-5">
              <button className="py-1 px-2 bg-red-500 text-white rounded">
                Break Piggy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <h3 className="font-semibold mb-1">Recent activities</h3>

          <div className="text-center">No record found</div>

          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          <span>s/n</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Amount
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Role
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person) => (
                        <tr
                          key={person.name}
                          className="divide-x divide-gray-200"
                        >
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                {person.image}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">
                              {person.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.department}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 text-green-800 px-2 text-xs font-semibold leading-5 ">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default PiggieBank;
