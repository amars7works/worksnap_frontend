import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import '../styles/Login.css';
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props);

    // userService.logout();

    this.state = {
        username: '',
        password: '',
        submitted: false,
        loading: false,
        error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

  handleSubmit(e) { 
      
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
        return;
    }

    let formData ={
    }
       console.log("formData",formData.requestType)
       
          
          const config = {
            method: 'POST',
            url: '/api/user_daily_report/',
            withCredentials: true,
            data: formData
          }
          axios(config).then((response) => {
            console.log(response.data)
          });


          console.log(formData)

        }
          

  render() {
    const { username, password, submitted, loading, error } = this.state;

    return (
      <div>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="email">Email address</Form.Label>
            <Form.Control
              className="place"
              type="email"
              placeholder="Enter email"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="email">Password</Form.Label>
            <Form.Control
              className="email"
              type="password"
              placeholder="Password"
              name="password"
              value={password} 
              onChange={this.handleChange}
            />
             {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>

          
        </Form>
      </div>
    );
  }
}

export default Login;
