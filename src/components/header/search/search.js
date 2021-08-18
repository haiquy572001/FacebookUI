import React from "react";
import "../../../styles/search.css";
function Search() {
  return (
    <div className="logo_search">
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt=""
          />
        </a>
      </div>
      <div className="search">
        <input type="text" placeholder="Tìm kiếm trên Facebook" />
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
