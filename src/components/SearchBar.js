import React, { Component } from "react";

export class SearchBar extends Component {
  state = { username: "" };

  handleClick = (e) => {
    alert("This is  " + this.state.username + "'s profile");
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="form" onSubmit={this.handleClick}>
          <div className="ui fluid input focus">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
