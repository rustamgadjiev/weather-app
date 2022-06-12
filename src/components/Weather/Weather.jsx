import { getCurrentDate } from "../../utils/helpers";
import { weatherImage } from "../../utils/app-data";
import s from "./Weather.module.scss";

export const Weather = ({ name, sys, main, weather, cod = "400" }) => {
  if (cod === "400" || cod === "404") return;

  return (
    <div className={s.wrapper}>
      <h1 className={s.city}>
        {name}, {sys?.country}
      </h1>
      <div className={s.date}>{getCurrentDate()}</div>
      <div className={s.temp}>
        <div className={s.weather}>
          <img
            src={weatherImage[weather[0].main.toLowerCase()]}
            alt={weather[0].main}
          />
          <p className={s.description}>{weather[0].description}</p>
        </div>
        <h2>{Math.round(main.temp)}°c</h2>
        <span className={s.min}>
          {Math.floor(main.temp_min)}°c / {Math.ceil(main.temp_max)}°c
        </span>
      </div>
    </div>
  );
};
