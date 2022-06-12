import { images, months, weekDays } from "./app-data";
import { API } from "./constants";

export const getCurrentDate = () => {
  const date = new Date();

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const week = weekDays[date.getDay()];

  return `${week} ${day} ${month} ${year}`;
};

export const getUserRegionName = (setUserRegionName) => {
  try {
    fetch("https://ipleak.net/json/")
      .then((resp) => resp.json())
      .then((json) => setUserRegionName(json.region_name))
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};

export const getRandomImageUrl = () => {
  return images[Math.floor(Math.random() * images.length)];
};
