import { forecastType } from "../../types";
import { titleCase } from "../../helpers/titleCase";
import { getComponentName } from "../../helpers/getComponentName";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../Loading";
import "./forecast.css";
import BackArrowButton from "../Icons/BackArrowButton";
import MapPin from "../Icons/MapPin";
import FeelsLike from "../Icons/FeelsLike";
import Humidity from "../Icons/Humidity";

type propsType = {
  data: forecastType | null;
  handleClickFromForecast: () => void;
};

export default function Forecast({
  data,
  handleClickFromForecast,
}: propsType): JSX.Element {
  const today = data?.list[0];
  const icon: string = today == null ? "" : today?.weather[0]?.icon;
  const componentName: string = getComponentName(icon);
  // lazy load svg component to display the svg weather icon component based on the weather <Icon/>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const Icon = lazy(() => import(`../Icons/${componentName}.tsx`));

  // call home handleCLickFromForecast to set display forecast to false so the when back button is clicked from forecast it goes to home page
  const onBackArrowClick = () => {
    handleClickFromForecast();
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000);
  }, []);

  return (
    <>
      {isMounted ? (
        <section className="w-full md:max-w-[330px] flex flex-col h-full lg:h-[459px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
          <div className="p-1 ml-2 mt-2">
            <div className="flex flex-row">
              <BackArrowButton onBackArrowClick={onBackArrowClick} />
              <h1 className="text-sky-400/100 text-lg font-bold">
                Weather App
              </h1>
            </div>
          </div>

          <hr className="h-px mr-0 ml-0 bg-gray-300 border-1"></hr>
          {/* weather icon and temperature */}
          <div className="flex relative flex-col justify-center p-2 mx-2">
            <div className="mt-0">
              <Suspense fallback={<Loading error={false} />}>
                {Icon && <Icon />}
              </Suspense>
            </div>
            <div className="absolute text-6xl mt-24 font-poppins w-full text-center">
              <span className="font-black">
                {Math.round(today?.main?.temp || 25)}
                <sup
                  className="font-extrabold text-xl"
                  style={{
                    verticalAlign: "top",
                    position: "relative",
                    top: "-0.125em",
                    right: "-0.35em",
                  }}
                >
                  o
                </sup>
              </span>
              <span className="font-bold ml-1 p-2">C</span>
            </div>
            {/* description and city */}
            <div className="font-poppins font-bold text-lg">
              <div className="w-full text-center pb-2 mt-0">
                <span>{titleCase(today?.weather[0]?.description || "")}</span>
              </div>
              <div className="w-full text-center">
                <div className="inline-flex text-center m-auto">
                  <MapPin />
                  <span className="text-base text-center">
                    {data?.name}, {data?.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* last section of card */}
          <div className="flex flex-row w-full font-poppins mt-2 font-semibold overflow-hidden">
            <div className="border-gray-200 border w-full">
              <div className="flex flex-row relative">
                <FeelsLike />
                <div className="flex flex-col text-sm absolute right-7 top-3">
                  <div>
                    {Math.round(today?.main?.feels_like || 25)}
                    <sup>o</sup>
                    <span>C</span>
                  </div>
                  <div className="text-xs">Feels like</div>
                </div>
              </div>
            </div>
            <div className="border-gray-200 border w-full ">
              <div className="flex flex-row relative">
                <Humidity />
                <div className="flex flex-col text-sm absolute left-16 top-3">
                  <div>
                    {today?.main?.humidity}
                    <span>%</span>
                  </div>
                  <div className="text-xs">Humidity</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading error={false} />
      )}
    </>
  );
}
