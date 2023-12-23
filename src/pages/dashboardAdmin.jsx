import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';

const DashboardAdmin = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col sm={12} className="p-4">
            <NavbarAdmin />
            <h2>Dashboard Admin</h2>
            <Button as={Link} to="/users" variant="primary">
              Kelola Data User
            </Button>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default DashboardAdmin;
