import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col md={12}>
          <Card>
          <Card.Header style={{ fontWeight: 'bold' }}>Contact Me</Card.Header>
            <Card.Body>
              <Card.Text>
                For questions or feedback, please choose a category below:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>General Inquiry</Card.Header>
            <Card.Body>
              <Card.Text>
                For general inquiries, please email us at:
              </Card.Text>
              <Button variant="primary" href="mailto:general@example.com">
                general@example.com
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>Feedback</Card.Header>
            <Card.Body>
              <Card.Text>
                We value your feedback! Please share your comments at:
              </Card.Text>
              <Button variant="warning" href="mailto:feedback@example.com">
                feedback@example.com
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Card>
            <Card.Header>Support</Card.Header>
            <Card.Body>
              <Card.Text>
                Need assistance? Contact our support team at:
              </Card.Text>
              <Button variant="secondary" href="mailto:support@example.com">
                support@example.com
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
