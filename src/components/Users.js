import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, idx) => {
            return (
              <li key={idx}>
                {idx + 1}. {user.username} - {user.hometown}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
