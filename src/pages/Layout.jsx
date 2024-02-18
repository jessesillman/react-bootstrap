import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container> {/* Wrap the Navbar content in a Container */}
          <Navbar.Brand as={Link} to="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container className="mt-3"> {/* Add Container here if you want to wrap Outlet contents */}
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
