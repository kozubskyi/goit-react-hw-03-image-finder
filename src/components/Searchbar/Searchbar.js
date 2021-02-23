import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  changeInputValue = event => this.setState({ searchQuery: event.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearchFormSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.changeInputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
