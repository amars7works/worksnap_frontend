import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import '../styles/Login.css';
import FontAwesome from "react-fontawesome";
import { SecureLoginUser } from '../components/Networks/Auth';

class Login extends Component {
  constructor(props) {
    super(props);

    // userService.logout();

    this.state = {
        loading:false,
        username: '',
        password: '',
        submitted: false,
        error: '',
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
    this.setState({ submitted: true, loading: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
        return;
    }
    
    // signs users in.
    

    SecureLoginUser(username, password, this.props)
          
    // error => this.setState({ error, loading: false })

          
  }
          

  render() {
    const { username, password, submitted, loading, error } = this.state;

    return (
      <div>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="email">Username or E-mail</Form.Label>
            <Form.Control
              className="place"
              type="text"
              placeholder="Enter Username or E-mail"
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

          <Button variant="primary" type="submit" disabled={loading} >
            Login
            
          </Button>
        
        
        </Form>
        {/* {loading && <center> 
          <FontAwesome 
							name='spinner' 
							size='3x'
							pulse spin
              className="mx-auto"   
						/>
          </center>
                            
      } */}
     
      </div>
    );
  }
}

export default Login;
