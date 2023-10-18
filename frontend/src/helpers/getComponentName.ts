const svgList = [
  { componentName: "ClearSkyDay", iconCode: "01d" },
  { componentName: "ClearSkyNight", iconCode: "01n" },
  { componentName: "FewCloudsDay", iconCode: "02d" },
  { componentName: "FewCloudsNight", iconCode: "02n" },
  { componentName: "ScatteredClouds", iconCode: "03d" },
  { componentName: "ScatteredClouds", iconCode: "03n" },
  { componentName: "BrokenClouds", iconCode: "04d" },
  { componentName: "BrokenClouds", iconCode: "04n" },
  { componentName: "ShowerRain", iconCode: "09d" },
  { componentName: "ShowerRain", iconCode: "09n" },
  { componentName: "Rain", iconCode: "10d" },
  { componentName: "Rain", iconCode: "10n" },
  { componentName: "Thunderstorm", iconCode: "11d" },
  { componentName: "Thunderstorm", iconCode: "11n" },
  { componentName: "Snow", iconCode: "13d" },
  { componentName: "Snow", iconCode: "13n" },
  { componentName: "DefaultIcon", iconCode: "50d" },
  { componentName: "DefaultIcon", iconCode: "50n" },
];

export const getComponentName = (icon: string) => {
  const name = svgList.find((obj) => obj.iconCode === icon)?.componentName;
  // console.log("name in helper ==========", name);
  return name ? name : "DefaultIcon";
};
