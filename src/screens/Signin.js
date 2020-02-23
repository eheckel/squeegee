import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navigation from './Navigation';

import '../App.css';

const Signin = () => {    
        return ( 
          <>
          <Navigation />  
          <Form id="signup">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" id="submit-button" type="submit">
            Sign In
          </Button>
        </Form>
        </>
        );
  }

export default Signin;

