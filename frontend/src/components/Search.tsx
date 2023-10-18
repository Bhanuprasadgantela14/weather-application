import { ChangeEvent } from "react";
import { locationDetailsType } from "../types";

type propsType = {
  location: string;
  locationDetails: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLocationSelect: (loc: locationDetailsType) => void;
  onSubmit: () => void;
};

export default function Search({
  onInputChange,
  location,
  locationDetails,
  handleLocationSelect,
  onSubmit,
}: propsType): JSX.Element {
  return (
    <div className="relative w-full">
      <input
        type="text"
        onChange={onInputChange}
        value={location}
        className="block p-2.5 w-full z-20 text-center rounded-md border-2 dark:placeholder-gray-300 font-semibold"
        placeholder="Enter city name"
        required
      />
      <ul className="absolute z-10 top-12 right-1 left-0 w-70 bg-gray-200 ml-1 rounded-lg">
        {locationDetails.map((loc: locationDetailsType, index) => (
          <li key={`${loc.name}-${index}`}>
            <button
              className="text-left text-black text-sm w-full hover:bg-blue-700 hover:text-white hover:rounded-lg px-2 py-1 cursor-pointer"
              onClick={() => handleLocationSelect(loc)}
            >
              {loc.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        onClick={onSubmit}
        className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-sky-400/100 rounded-r-lg border border-sky-400/100 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:border-blue-700"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
