import React, {useEffect,useState} from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
    if ( email === ""|| password === "") {
        alert("Failed to Login,fill all the form ");
      } else {
        try {
          const response = await axios.post("http://localhost:8080/login", {
            email,
            password,
          });
  
          if (response.status === 200) {
            alert("Login Successful");
            window.location.replace('http://localhost:3000/');
          } else {
            alert("Failed to login");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while submitting data");
        }}};
 

  return (
    <div style={{ backgroundImage: 'url("components/img/bg.png")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Login</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"       value={email}                    onChange={(e) => setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"                           value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <a href="home" className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </a>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      didn't have an account?{" "}
                        <a href="signup" className="text-primary fw-bold">
                        Sign Up
                        </a>
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Login As Admin??{" "}
                        <a href="/LoginAdmin" className="text-primary fw-bold">
                          Click Here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
