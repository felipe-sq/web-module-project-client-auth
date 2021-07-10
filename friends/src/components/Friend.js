import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';

class Friend extends React.Component {

  componentDidMount() {
    console.log("Friend CDM")
  }

  render() {
    const { friend } = this.props;

    return (
      <Container style={{ width: '30rem'}}>
        <h5><Badge>Name: {friend.name}</Badge></h5>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </Container>
      )
  }
}

export default Friend;