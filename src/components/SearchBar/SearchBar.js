import React, { useState, useContext } from "react";
import style from "./SearchBar.module.scss";

const SearchBar = ({ onSearch, onClean }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    console.log("handleSubmit");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    onClean();
    setSearch("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form className={style.searchform} onSubmit={(e) => handleSubmit(e)}>
          <input
            className={style.searchform__input}
            type="text"
            name="search"
            value={search}
            onChange={(e) => handleChange(e)}
          />
          <button className={style.searchform__bth} type="submit">
            Отправить
          </button>
          <button
            className={style.searchform__bth}
            type="button"
            onClick={() => handleClear()}
          >
            Сброс
          </button>
        </form>
      </header>
      <div></div>
    </div>
  );
};

export default SearchBar;
