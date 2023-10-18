export default function GetDeviceLocation(): JSX.Element {
  return (
    <>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-300">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <button
        type="button"
        className="text-white bg-sky-400/100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-2.5 mb-2 dark:sky-400/100 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-600"
      >
        Get Device Location
      </button>
    </>
  );
}
