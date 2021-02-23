import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  changeInputValue = event => this.setState({ searchQuery: event.target.value });

  onSubmit = event => {
    event.preventDefault();
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

Searchbar.defaultProps = {
  searchQuery: '',
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  onSearchFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
