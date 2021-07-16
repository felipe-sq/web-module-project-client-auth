import React from 'react';
import { Container, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import axiosWithAuth from '../helpers/axiosWithAuth';
import Friend from './Friend';

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData();
  }
 
  getData = () => {
    axiosWithAuth().get("/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container style={{ width: '50rem'}}>
        <Card bg='dark' text='light' border="dark" className='mb-2'>
          <h3>Protected Friends List!</h3><br />
          {
            this.state.friends.map(friend => <Friend key={friend.id} friend={friend} />)
          }
        </Card>
      </Container>
    )
  }
};

export default FriendsList;