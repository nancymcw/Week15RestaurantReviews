import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Buildings } from "react-bootstrap-icons";
import { SearchBar } from "./SearchBar";

export function Navigation() {
  return (
    <Navbar expand="sm" className="nav-bar-styling">
      <Container>
        <Navbar.Brand href="/">
          <Buildings style={{ margin: "4px" }} />
          Tastify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/restaurants">My Restaurants</Nav.Link>
            <Nav.Link href="/addnewrestaurant">Add New Restaurant</Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
