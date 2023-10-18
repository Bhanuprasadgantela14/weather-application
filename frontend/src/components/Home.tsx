import Search from "./Search";
import GetDeviceLocation from "./GetDeviceLocation";
import useForecast from "../hooks/useForecast";
import Forecast from "./forecast/Forecast";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Home(): JSX.Element {
  // get weather details from helper function
  const {
    location,
    locationDetails,
    forecast,
    onInputChange,
    handleLocationSelect,
    onSubmit,
  } = useForecast();

  // set boolean displayForecast to either display <Forecast/> or not
  const [displayForecast, setDisplayForecast] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (forecast) setDisplayForecast(true);
  }, [forecast]);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000);
  }, []);

  // handle back arrow click from <Forecast/> component
  const handleClickFromForecast = () => {
    setDisplayForecast(false);
  };
  return (
    <>
      {isMounted ? (
        displayForecast ? (
          <Forecast
            data={forecast}
            handleClickFromForecast={handleClickFromForecast}
          />
        ) : (
          <section className="w-full md:max-w-[340px] flex flex-col h-full lg:h-[240px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
            <div className="p-1 ml-4 mt-2">
              <h1 className="text-sky-400/100 text-lg font-bold">
                Weather App
              </h1>
            </div>
            <hr className="h-px my-2 mb-4 mr-0 ml-0 bg-gray-300 border-1"></hr>
            <div className="flex flex-col justify-center p-2 mx-2">
              <Search
                location={location}
                locationDetails={locationDetails}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onInputChange={onInputChange}
                handleLocationSelect={handleLocationSelect}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={onSubmit}
              />
              {/* <GetDeviceLocation /> */}
            </div>
          </section>
        )
      ) : (
        <Loading error={false} />
      )}
    </>
  );
}
