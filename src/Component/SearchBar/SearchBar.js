import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchVideos(this.state.searchTerm);
  };

  render() {
    return (
      <form class="col-md-6" onSubmit={this.handleSubmit}>
        <text for="search" class="form-label">
          Search{" "}
        </text>
        <input
          type="search"
          class="form-control"
          id="input"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        ></input>
        <button> Enter </button>
      </form>
    );
  }
}
export default SearchBar;
