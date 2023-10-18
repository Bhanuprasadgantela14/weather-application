/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ChangeEvent, useEffect, useState } from "react";
import { locationDetailsType, forecastType } from "../types";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const useForecast = () => {
  const [location, setLocation] = useState<string>("");
  const [locationDetails, setLocationDetails] = useState<[]>([]);
  const [city, setCity] = useState<locationDetailsType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  // const navigate = useNavigate();

  const getLocationDetails = async (value: string) => {
    const response = await axios.post("http://127.0.0.1:8000/api/location/", {
      value: value,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setLocationDetails(response?.data);
    console.log(response?.data);
  };

  const onSubmit = async () => {
    if (!city) return;
    await getForecast(city);

    // navigate("/forecast");
  };

  const getForecast = async (loc: locationDetailsType) => {
    const response = await axios.post("http://127.0.0.1:8000/api/forecast/", {
      loc: loc,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const forecastData = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...response.data?.city,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      list: response.data?.list?.slice(0, 17),
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setForecast(forecastData);
    // console.log(response.data);
  };

  const handleLocationSelect = (loc: locationDetailsType) => {
    setCity(loc);
  };

  useEffect(() => {
    if (city) {
      setLocation(city.name);
      setLocationDetails([]);
    }
  }, [city]);

  const onInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setLocation(e.target.value);
    if (value === "") return;
    await getLocationDetails(value);
  };

  return {
    location,
    locationDetails,
    forecast,
    onInputChange,
    handleLocationSelect,
    onSubmit,
  };
};

export default useForecast;
