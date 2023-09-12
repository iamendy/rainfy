import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { name: "Euro Wallet" },
  { name: "USD Wallet" },
  { name: "GBP Wallet" },
];

const SaveBox = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <aside className="lg:w-[30%] p-4">
      <h3 className="font-semibold">Start your Savings Journey</h3>
      <form action="#" method="POST" className="mt-4">
        <div className="space-y-5">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left rounded-md border border-gray-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

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
              className="inline-flex w-full items-center justify-center rounded-md bg-yellow hover:bg-yellow/90 px-3.5 py-2.5 font-semibold leading-7 "
            >
              Approve
            </button>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-black/10 px-3.5 py-2.5 font-semibold leading-7 text-white "
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
