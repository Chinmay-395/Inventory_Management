import React from "react";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
function SubNavBar() {
  const [search, setSearch] = React.useState({ text: "" });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("THE SEARCH ", search.text);
  };
  return (
    <>
      <div
        style={{ position: "inherit" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <nav className="mr-auto">
          <button
            onClick={() => console.log("CLICKED")}
            className="btn btn-outline-primary m-1"
          >
            CREATE
          </button>

          <button
            onClick={() => console.log("CLICKED")}
            className="btn btn-outline-success m-1"
          >
            UPDATE
          </button>

          <button
            onClick={() => console.log("CLICKED")}
            className="btn btn-outline-danger m-1"
          >
            DELETE
          </button>
        </nav>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            onChange={(e) => setSearch({ ...search, text: e.target.value })}
            value={search.text}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearchSubmit} className="btn btn-outline-info">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SubNavBar;
