import "./App.scss";
import SearchBar from "./components/SearchBar";
import DataResult from "./components/DataResult";
import searchApi from "../src/searchApi";

import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [favoritData, setFavoritData] = useState([]);

  useEffect(() => {
    const localstoregeFavoritData = localStorage.getItem("favoritData");

    if (localstoregeFavoritData) {
      setFavoritData([...JSON.parse(localstoregeFavoritData)]);
    }
  }, []);

  useEffect(() => {
    if (query) {
      searchApi.fethSearch(query).then((data) => setData([...data]));
    }
  }, [query]);

  useEffect(() => {
    if (favoritData.length !== 0) {
      localStorage.setItem("favoritData", JSON.stringify(favoritData));
    }
  }, [favoritData]);

  const handleQuery = (search) => {
    setQuery(search);
  };

  const handleClean = () => {
    setData([]);
    setQuery("");
  };

  const handleAddFavorit = (item) => {
    if (favoritData.length !== 0) {
      const mass = favoritData.find((itemF) => itemF.name === item.name);
      if (mass) {
        const temp = [];
        favoritData.map((itemF) => {
          if (itemF.name !== item.name) {
            temp.push(itemF);
          }
        });
        setFavoritData([...temp]);
        localStorage.removeItem("favoritData");
      } else {
        setFavoritData((prevdata) => [...prevdata, item]);
      }
    } else {
      setFavoritData((prevdata) => [...prevdata, item]);
    }

    // }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleQuery} onClean={handleClean} />
      <DataResult
        data={data}
        onAddFavorit={handleAddFavorit}
        favData={favoritData}
      />
    </div>
  );
}

export default App;
