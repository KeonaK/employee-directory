import React from "react";
// import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search here:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type employee name here"
          id="search"
        />

        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Reload
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
