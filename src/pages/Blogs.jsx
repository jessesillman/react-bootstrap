import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';

const Blogs = () => {
  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col md={12}>
          <Card>
          <Card.Header style={{ fontWeight: 'bold' }}>Blogs</Card.Header>
            <Card.Body>
              <Card.Title>Blog Articles</Card.Title>
              <Card.Text>
                Find the latest articles and blog posts here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                <Card className="mb-2">
                  <Card.Header>Card Header #1</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Here is some content for the second blog article...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>

            {/* Repeat for other accordion items */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                <Card className="mb-2">
                  <Card.Header>Card Header #2</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Content for the third blog article...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                <Card className="mb-2">
                  <Card.Header>Card Header #3</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Content for the fourth blog article...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
