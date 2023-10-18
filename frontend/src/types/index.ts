export type locationDetailsType = {
  name: string;
  lat: number;
  lon: number;
};

export type forecastType = {
  name: string;
  country: string;
  list: [
    {
      dt: number;
      main: {
        feels_like: number | undefined;
        humidity: number | undefined;
        pressure: number;
        temp: number | undefined;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          id: number;
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
  sunrise: number;
  sunset: number;
};
