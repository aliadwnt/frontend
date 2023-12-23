import React, {useEffect,useState} from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
    if (name === "" || phone === "" || email === ""|| password === ""|| address=== "") {
        alert("Failed to Register,fill all the form ");
      } else {
        try {
          const response = await axios.post("http://localhost:8080/register", {
            name,
            phone,
            address,
            email,
            password,
          });
  
          if (response.status === 200) {
            alert("Register Successful");
            window.location.replace('http://localhost:3000/');
          } else {
            alert("Failed to register");
          }
        } catch (error) {
          console.error(error);
          alert("An error occurred while submitting data");
        }}};
 

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Sign Up</h2>
                  <h1> </h1>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"   
                          value={name}
                          onChange={(e) => setName(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"       value={email}                    onChange={(e) => setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="text-center">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number"                           value={phone}
                          onChange={(e) => setPhone(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label className="text-center">
                          Address
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Address"                           value={address}
                          onChange={(e) => setAddress(e.target.value)}/>
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
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                        <a href="login" className="text-primary fw-bold"></a>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="login" className="text-primary fw-bold">
                          Sign In
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