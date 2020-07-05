import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Display from "./Display";

export class App extends Component {
  state = { profile: "" };
  handleSearchSubmit = async (username) => {
    let res = await axios.get("https://api.github.com/users/" + username);
    this.setState({ profile: res.data });
    console.log(res.data);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <Display
          image={this.state.profile.avatar_url}
          login={this.state.profile.login}
          name={this.state.profile.name}
          repos={this.state.profile.public_repos}
          following={this.state.profile.following}
          followers={this.state.profile.followers}
        />
      </div>
    );
  }
}

export default App;
