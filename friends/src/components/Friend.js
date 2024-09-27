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
        <Card bg='light' text='dark' border="danger" className='mb-2'>
          <h5>Name: {friend.name}</h5>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </Card>
      </Container>
      )
  }
}

export default Friend;