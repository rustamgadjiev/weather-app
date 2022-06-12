import { useEffect, useState } from "react";
import "./App.css";
import { Background } from "./components/Background/Background";
import { Preloader } from "./components/Preloader/Preloader";
import { Search } from "./components/Search/Search";
import { Weather } from "./components/Weather/Weather";
import { API } from "./utils/constants";
import { getUserRegionName } from "./utils/helpers";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [userRegionName, setUserRegionName] = useState("");

  const getWeatherData = (searchValue, setWeatherData) => {
    if (searchValue === "") {
      return;
    }

    try {
      fetch(`${API.data}?q=${searchValue}&units=metric&appid=${API.key}`)
        .then((resp) => resp.json())
        .then((data) => {
          setWeatherData(data);
          setSearchValue("");
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      getWeatherData(searchValue, setWeatherData);
    }
  };

  useEffect(() => {
    getUserRegionName(setUserRegionName);
  }, []);

  useEffect(() => {
    getWeatherData(userRegionName, setWeatherData);
  }, [userRegionName]);

  return (
    <Preloader isLoading={isLoading}>
      <div className="App" onKeyUp={(e) => search(e)}>
        <div className="container">
          <div className="app-wrapper">
            <Weather {...weatherData} />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Background />
          </div>
        </div>
      </div>
    </Preloader>
  );
}

export default App;
