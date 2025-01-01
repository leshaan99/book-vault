import React, { useState } from "react";
import { Card } from "./Card";
import axios from "axios";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q={search}&key=AIzaSyDQW-lisT5A2gtHT9Z7Yz7elegj4dItHzc&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>Books Are A Uniquely Portable Magic</h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button className="search">Search</button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </div>
  );
};

export default Main;
