import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users:
          {this.props.users.map(user => <li key={user.hometown}>{user.username}</li>)}
        </ul>
        <p>Total Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
