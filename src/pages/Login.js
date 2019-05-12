import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import '../styles/Login.css';


class Login extends Component {

  render() {
    return (
      <div>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="email">Email address</Form.Label>
            <Form.Control
              className="place"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="email">Password</Form.Label>
            <Form.Control
              className="email"
              type="password"
              placeholder="Password"
            />
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
