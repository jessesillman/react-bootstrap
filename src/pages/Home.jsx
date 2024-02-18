import { useState } from 'react';
import { Card, Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Container className="p-3">
      <Row>
        <Col md={12}>
          <Card className="mb-3">
          <Card.Header style={{ fontWeight: 'bold' }}>Welcome</Card.Header>
            <Card.Body>
              <Card.Title>Home Page</Card.Title>
              <Card.Text>
                This is the homepage of our website. Explore other sections using the navigation above.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubscribe}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Subscribe to our newsletter for updates.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </Card.Body>
          </Card>
          {showSuccess && (
            <Alert variant="success" className="mt-3" dismissible onClose={() => setShowSuccess(false)}>
              Successfully subscribed with email: {email}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
