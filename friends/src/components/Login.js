import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = { 
    credentials: {
      username: '',
      password: '',
      isLoading: true
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  login = e => {
    e.preventDefault();
    // changed port to 5001 as local server was unable to run on 5000
    axios.post("http://localhost:5001/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log("login was successful!");
        this.props.history.push("/protected");
      })
    .catch(err => console.log("muy triste error", err))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>  
        </form>
      </div>
    );
  }
}

export default Login;