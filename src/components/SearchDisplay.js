import React, { Component } from "react";
import API from "../utils/API";

import Container from "./Container";
import SearchForm from "./SearchForm";

class SearchDisplay extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    // API.getBaseBreedsList()
    //   .then((res) => this.setState({ breeds: res.data.message }))
    //   .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     API.getDogsOfBreed(this.state.search)
  //       .then((res) => {
  //         if (res.data.status === "error") {
  //           throw new Error(res.data.message);
  //         }
  //         this.setState({ results: res.data.message, error: "" });
  //       })
  //       .catch((err) => this.setState({ error: err.message }));
  //   };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          {/* <SearchResults results={this.state.results} /> */}
        </Container>
      </div>
    );
  }
}

export default SearchDisplay;
