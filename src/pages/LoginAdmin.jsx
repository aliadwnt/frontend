// import React, { useEffect, useState } from 'react';
// import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';


// export default function() {
//   return (
//     <div style={{ backgroundImage: 'url("components/img/bg.png")', backgroundSize: 'cover', minHeight: '100vh' }}>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <div className="border border-2 border-primary"></div>
//             <Card className="shadow px-4">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2 text-center text-uppercase ">Login</h2>
//                   <div className="mb-3">
//                     <Form>
//                       <Form.Group className="mb-3">
//                         <Form.Label className="text-center">Email Address</Form.Label>
//                         <Form.Control type="email" placeholder="Email Address" />
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

//                       <a href="users" className="d-grid">
//                         <Button variant="primary" type="submit">
//                         Sign in and manage User Database
//                         </Button>
//                       </a>
//                     </Form>

//                     <div className="mt-3">
//                       <p className="mb-0  text-center">
//                         Login As User?{' '}
//                         <a href="signup" className="text-primary fw-bold">
//                           Sign Up
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginAdmin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any login logic here
    // Redirect to "/users" after successful login
    window.location.href = '/users';
  };

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
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

                      {/* Use Link instead of <a> for React router navigation */}
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign in and manage User Database
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0 text-center">
                        Login As User?{' '}
                        <Link to="signup" className="text-primary fw-bold">
                          Sign Up
                        </Link>
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
  );
}
