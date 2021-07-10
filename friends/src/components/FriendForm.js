import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class NewFriend extends React.Component {
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

  submit = e => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/friends", this.state.newFriend)
      .then(res => {
        console.log(res);
        this.props.history.push("/protected");
      })
      .catch(err => console.log("error adding new friend!", err))
  };

  render() {
    return (
      <Card>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />          
          <input
            type="text"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </Card>
    )
  }
}