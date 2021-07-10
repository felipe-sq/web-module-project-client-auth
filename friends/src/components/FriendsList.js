import React from 'react';
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
    console.log(this.state.friends);

    return (
      <div className="title-wrapper">
        {/* <div className="title"> */}
          {/* <div className="inner-wrapper"> */}
            <div className="top-title">Friends List!
              {
                this.state.friends.map(friend => <Friend key={friend.id} friend={friend} />)
              }
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
};

export default FriendsList;