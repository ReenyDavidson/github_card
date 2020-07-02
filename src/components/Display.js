import React from "react";

const Display = (props) => {
  return (
    <div>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <div>
              <img src={props.image} alt="icon" style={{ width: "150px" }} />
            </div>
            <div className="content">
              <div className="header">Name: {props.name}</div>
              <div className="meta">
                <p>Repos: {props.repos} Repositories</p>
              </div>
              <div className="description">Username: {props.login}</div>
            </div>
            <div className="extra content">
              <span className="right floated"></span>
              <span>
                {props.followers} Followers, {props.following} Following
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
