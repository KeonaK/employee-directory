import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class SearchDisplay extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  componentDidMount() {
    this.findEmployee("");
  }

  findEmployee = () => {
    API.find()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults
            results={this.state.results}
            search={this.state.search}
          />
        </Container>
      </div>
    );
  }
}

export default SearchDisplay;
