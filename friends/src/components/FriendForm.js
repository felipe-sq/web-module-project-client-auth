import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

import axiosWithAuth from '../helpers/axiosWithAuth';

class FriendForm extends React.Component {
  state = {
    newFriend: {
      id: null,
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  submit = (e) => {
    e.preventDefault();
    axiosWithAuth().post("/friends", this.state.newFriend)
      .then(res => {
      console.log(res);
      this.props.history.push("/protected");
  })
      .catch(err => console.log("error adding new friend!", err));
  };

  render() {
    return (
      <Card>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="name"
            placeholder="Friend's Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            name="age"
            placeholder="Friend's Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          /><br/>     
          <input
            type="text"
            name="email"
            placeholder="Friend's Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          /><br/>
          <button>Add Friend</button>
        </form>
      </Card>
    )
  }
}

export default FriendForm;